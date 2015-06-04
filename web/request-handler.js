var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelper = require('./http-helpers.js');
var url = require('url');


exports.handleRequest = function(req, res) {

  // server log
  console.log("Serving request type " + req.method + " for url " + req.url);

  // http request
  requestAction[req.method](req, res, req.url);

};

/* Handles GET requests */

var getRequest = function(req, res, url) { 
  if (url === '/') {
    // serve home page
    httpHelper.serveAssets(res, archive.paths.siteAssets + "/index.html");
  } else {
    // serve archived site content
    archive.isURLArchived(url, function(isFound){
      if (isFound) {
        // serve respective file content
        httpHelper.serveAssets(res, archive.paths.archivedSites + req.url);
      } else {
        httpHelper.sendResponse(404, res);
      }
    });

  }
}

/* Handles POST requests */

var postRequest = function(req, res) {
  // save url
  archive.addUrlToList(req._postData.url);

  // return 302 Found statusCode
  httpHelper.sendResponse(302, res);
}

var requestAction = {
  "GET": getRequest,
  "POST": postRequest
};


// check in archives/sites for file
// var localDIR = archive.paths.archivedSites;
// archive.readListOfUrls(localDIR, function(filenames) {
//   if (archive.isUrlInList(filenames, URL)) {
    // check if URL is archived
    // add URL to list

    // save the response to file with a progress callback
    // http.get({
    //   url: 'http://localhost/get',
    //   progress: function (current, total) {
    //     console.log('downloaded %d bytes from %d', current, total);
    //   }
    // }, 'get.bin', function (err, res) {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }

    //   console.log(res.code, res.headers, res.file);
    // });

    // send http response
    // sendResponse(res, 200, httpHelper.headers, 'google');
  // }
// });