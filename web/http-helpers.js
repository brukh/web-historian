var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

<<<<<<< HEAD
/*  Write some code here that helps serve up your static files!
   (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
*/

exports.serveAssets = function(res, asset, callback) {
  fs.readFile(asset, {encoding: 'utf8'}, function(err, data) {
    if (err) {
      exports.sendResponse(404, res);
    } else {
      // If no encoding is specified, then the raw buffer is returned. data === Buffer[220]
      exports.sendResponse(200, res, data); 
    }
    // TODO: do something..
    if (callback) {
      callback(data.toString());
    }
  });
};


/* Handles HTTP responses */
exports.sendResponse = function(statusCode, response, body) {
  response.writeHead(statusCode, exports.headers);
  response.end(JSON.stringify(body));
};

=======
exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
};


>>>>>>> d281c5846fb583fa7b9b2caf9bf722acf3365d04

// As you progress, keep thinking about what helper functions you can put here!
