var path = require('path');

console.log("routes.js is up");
module.exports = function(app){
  app.get('/', function(req, res){
    res.render('./client/index.html');
  });
};
