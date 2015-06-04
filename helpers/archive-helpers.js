var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'), // returns /local/machine/path/archives/sites
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(dir, callback){
  fs.readdir(dir, function(err, filenames) {
    callback( filenames );
  });
};

exports.isUrlInList = function(list, url){
  for(var i = 0; i < list.length; i++) {
    if (list[i] === url) {
     return true;
    }
  }

  return false;
};

exports.addUrlToList = function(){
};

exports.isURLArchived = function(url, callback){
  // readfile: pass in archive path + url
  fs.readFile(exports.paths.archivedSites + url, function(err, data){
    // return boolean value for callback
    if (err) {
      callback(false);
    } else {
      callback(true);
    }   
  }); 
};

exports.downloadUrls = function(){
};


