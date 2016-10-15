var express = require("express"),
    path = require('path'),
    root = __dirname,
    app = express();

app.use(express.static(path.join(root,'./client')));

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function(){
  console.log("server on port 8000");
});
