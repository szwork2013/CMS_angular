var express = require("express"),
    app = express(),
    router = express.Router(),
    busboy = require("connect-busboy"),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    mongoose = require("mongoose"),
    docs = require("express-mongoose-docs"),
    cors = require("cors"),
    jwt = require("jsonwebtoken"),
    config = require("./config");

mongoose.connect(config.database);
app.set("superSecret", config.secret);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(busboy({
  limits: {
    fileSize: 10 * 1024 * 1024 * 1024
  }}));
app.use(morgan("dev"));

app.use( function ( req, res, next ) {
  res.header( "Access-Control-Allow-Origin", "*" );
  res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
  next();
});

app.use(cors());
app.use("/uploads",express.static(__dirname + "/uploads")); 
app.use(require("./middlewares/cors"));
// app.use("/api/authenticate", require("./controllers/authenticate"));
app.use("/api/setup", require("./controllers/setup"));
app.use("/api/register", require("./controllers/register"));
app.use("/api/reset", require("./controllers/reset"));
// app.use("/api", require("./middlewares/auth"));
app.use("/api", require("./controllers"));
app.use(require("./middlewares/errorHandler"));

require("./middlewares/cron");
app.listen(config.port);
console.log("Magic happens at http://localhost:" + config.port);