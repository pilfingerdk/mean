// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
	
// config files
var db = require('./config/db'); // includes my mongoDB-connection for my DB-provider
var port = process.env.PORT || 8080; // set our port
var dbCon = mongoose.connect(db.url); // connect to our mongoDB database 



// grab the things we need (We don't need it actually..Don't know why yet.)
/*var mongoose = require('mongoose');
var Schema = mongoose.Schema;
*/

// create a schema
/* For later us.. to see types and nested data

  var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});


// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
*/


// create a schema

// Creating new Objects for the DB
/*var shoe = mongoose.Schema({
    name: String;
	size: String;
});
*/
//var Kitten = mongoose.model('Kitten', kittySchema);

//var silence = new Kitten({ name: 'Mis' });
//console.log(silence.name); // 'Silence'

//dbCon.on('error', console.error.bind(console, 'connection error:'));

// Testing dbCon.once -> status: it failed.
/*dbCon.once('open', function (callback) {
  //console.dir(dbCon);
  

    
});*/

/*silence.save(function (err, silence) {
      if (err) return console.error(err);

});*/

/*
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens)
})
/*


  

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Toft\'\s App is working on port ' + port);     // shoutout to the user
exports = module.exports = app;                             // expose app 