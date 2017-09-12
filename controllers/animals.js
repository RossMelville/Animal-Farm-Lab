var express = require('express');
var animalsRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;
var db;


MongoClient.connect('mongodb://localhost:27017/farm', function(err, database){
  if(err) return;
  db = database;
});


//animals index
animalsRouter.get('/', function(req, res) {
  //Get animals from DB
  db.collection('animals').find().toArray( function(err, results){
    if(err) console.log("Ooops " + err.toString());
    res.json(results);
  });
});

//SHOW

//EDIT

//UPDATE

//CREATE
animalsRouter.post('/', function(req, res){
  db.collection('animals').insertOne(req.body);
  res.redirect('/api/animals');
})

//DELETE

module.exports = animalsRouter;