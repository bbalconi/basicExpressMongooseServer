var express = require("express");
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Chair = require('./models/chair.js');
var uriUtil = require('mongodb-uri');

app.use(express.static('public'));
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var mongodbUri = 'mongodb://localhost/chairs';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
var options = {
  server: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}},
  replset: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}}
};
mongoose.connect(mongooseUri, options);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we have the database chairs connected');
});
app.post('/chairs', function(req, res, next){
  var chair = new Chair ();
  chair.type = req.body.type;
  chair.model = req.body.model;
  chair.save(function(err, chairReturned){
    if (err){
      console.log(err);
      next(err);
    } else {
      console.log(chairReturned);
      res.json('chair put in database' + chairReturned.model);
    }
  });
});
app.post('/chairs', function(req, res){

});
app.get('/chairs', function(req, res, next){
  Chair.find(function(err, chairs) {
    if (err) {
      console.log(err);
      next(err);
    } else {
    res.json(chairs);
   }
  })
});
app.put('/chairs', function(req, res){
  Chair.findById(req.body.id, function(err, chair, next) {
    if(err){
      console.log(err);
      next(err);
    } else {
      chair.type = req.body.type;
      chair.model = req.body.model;
      chair.save(function(err, chairReturned){
        if (err){
          console.log(err);
          next(err);
        } else {
          console.log(chairReturned);
          res.json('chair updated in database' + chairReturned.model);
        }
      });
    }
  });
});

app.delete('/chairs', function(req, res, next){
  Chair.findByIdAndRemove(req.body.id, function(err, chair) {
    if(err){
      console.log(err);
      next(err);
    } else {
      res.json("successfully deleted a chair: " + chair.model);
    }
  });
});

app.get("/", function(req, res) { 
    res.sendfile('index.html');
});

app.listen(5000, function() {
   console.log("Listening on 5000");
});