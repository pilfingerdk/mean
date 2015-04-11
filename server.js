// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
 
var dbCon = mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Mis' });
console.log(silence.name); // 'Silence'

//dbCon.on('error', console.error.bind(console, 'connection error:'));

/*dbCon.once('open', function (callback) {
  //console.dir(dbCon);
  

    
});*/

/*silence.save(function (err, silence) {
      if (err) return console.error(err);

});*/

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens)
})


  

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
console.log('Toft\'\s App is working on port ' + port); 		// shoutout to the user
exports = module.exports = app; 			// expose app