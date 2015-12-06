// ==========================
// get the packages we need==
// ==========================
var express = require("express"),
    app = express(),
    router = express.Router(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    jwt = require("jsonwebtoken"),
    config = require("./config"); 

// =========================
// configuration ===========
// =========================
mongoose.connect(config.database); // connect to database
app.set("superSecret", config.secret); // secret variable

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use( function ( req, res, next ) {
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    next();
});

app.use(require('./middlewares/errorHandler'));
app.use('/api', require('./middlewares/auth'));
app.use('/api', require('./controllers'));

app.listen( config.port );
console.log( "Magic happens at http://localhost:" + config.port );