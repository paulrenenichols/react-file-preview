var express         = require('express');
var path            = require('path');
var fs              = require('fs');

var mime            = require('mime-types')

var apiRouter       = express.Router();

var fileStoragePath = path.resolve(__dirname, '../../staticFiles/storage');

apiRouter.get('/files', function (req, res) {
  var files = fs.readdirSync(fileStoragePath);
  var fileStats = files.map(function (fileName) {
    var fileStats = fs.statSync(path.join(fileStoragePath, fileName));
    var fileInfo = {
      url: `/storage/${fileName}`,
      size: fileStats.size,
      contentType: mime.lookup(fileName),
      name: fileName
    };
    return fileInfo;
  });
  res.json(fileStats);
});

module.exports = apiRouter;
