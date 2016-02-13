# SETUP
* Make sure to set environment variable cs_env to "dev" if working in dev environment
* Ask Song Zheng for environment variables before running
* If logging gives you error, create a log directory in root folder
* Install all system requirements before "Run"

# Run
Simply type `gulp`. This will run node server, grunt sass, and browserify and watch file changes  

# System requirements
* Install node v4+
* npm install -g browserify
* npm install -g watchify
* npm install -g grunt-cli
* npm install supervisor -g
* gem install sass
* Install giraflogger by
    1. first cd into node_modules directory
    2. git clone https://stash.mps.intra.aexp.com/scm/data/giraflogger.git
* When all is installed, go to root project folder and run `npm install`

# Technical Debts
* Correctly detect localsearch in jqcomponent
* There are potentially 1000s of attributes. We are rending a hidden form for each attributes. Instead, we should have just 1 attribute that updates according to data. Generate attribute forms right before form upload
* attribute and feed show advanced options = duplicate code
* Request Logs - go over flow
* Request Logs -
    <input type="text" name="dataIngestRequestNotes[0][notes]" id="requestLog" ref="logInput" className="form-control" />
* Todo - create mapping for front end attributes vs back end attributes
* Todo - edit and new should have the same view template
* Todo - DDA: table views vs elastic search (empty search) is too hacky

# GOLD DIFF
* Npm add fixed-data-table

# Proxy Workarounds
  * npm set proxy
    * npm config set -f https-proxy http://Username:Password@proxy-newyork.aexp.com:8080
    or
    * npm config set -f https-proxy http://proxy-developer.aexp.com:8585

  * gem proxy config
    * sudo gem install --http-proxy http://Username:Password@proxy-newyork.aexp.com:8080 module
    or
    * sudo gem install --http-proxy http://proxy-developer.aexp.com:8585 module
    * gem install --http-proxy http://proxy-developer.aexp.com:8585 module  (for Windows OS)
    
## Overview 

### Digital Data Atlas
* DataAtlasContainer
  * When page loads, main.js sends all data to be loaded
  * Components:
    * FeedSearchComponent
    * FeedDetailComponent
      * Events: `REQUESTS`, `SELECTED_FEED`
    * AttributeTable
    * FeedAttributes
      * Uses Griddle
      * Events: `REQUESTS`, `SELECTED_FEED`
* AttributeComponent
  * AttributeTable
* AttributeTable
  * AttributeRow
  * AttributeTableComponent
    * Events: `NEW_REQUEST_ATTR_VIEW`, `NEW_ATTRIBUTE`
  * ButtonComponent
    * Events: `Requests`
  * CustomComponent
