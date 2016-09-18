var ping = require('ping');
var express = require('express');
var app = express();
var host = ['8.8.8.8'];
app.get('/ping', function (req, responce) {
      ping.promise.probe(host)
          .then(function (res) {
            responce.end(JSON.stringify(res));
          });
});
var server = app.listen(8080, function () {
  console.log('listen 8080');
})
