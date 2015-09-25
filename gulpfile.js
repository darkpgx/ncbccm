/*
 *
 * Browserify script recipe from gulp:
 * https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
 *
 */

var watchify = require('watchify');
var browserify = require('browserify');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var babelify = require('babelify');
var concat = require('gulp-concat');


// add custom browserify options here
var customOpts = {
  entries: ['./src/js/main.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

b.transform(babelify.configure({
  compact: false
}));

function jsCompile() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('main.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./public/js'));
}

// add transformations here
// i.e. b.transform(coffeeify);

gulp.task('js', jsCompile); // so you can run `gulp js` to build the file
b.on('update', jsCompile); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

/* end */


/*
 *
 * Own gulp task:
 *
 */

var sass = require('gulp-sass');
var rename = require('gulp-rename');
var shell = require('gulp-shell');

// start cordova server
gulp.task('watchServe', shell.task([
  'supervisor -w server,app.js ./bin/www'
]));

// sass compiler
gulp.task('sass', function(){
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(concat('application.css'))
    .pipe(gulp.dest('./public/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('./src/sass/*.scss', ['sass']);
});

gulp.task('default', ['watchServe', 'js', 'watch']);

gulp.task('lint', function () {
  return gulp.src([
    'src/js/*.js',
    'src/react/*.js',
    'src/react/**/*.js'])
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failOnError last.
    .pipe(eslint.failOnError());
});
