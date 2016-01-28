define(function (require) {
  "use strict";

  var angular = require("angular"),
      ngAnimate = require("ngAnimate"),
      ngResource = require("ngResource"),
      uiRouter = require("uiRouter");

  angular
    .module("app.core", [
      "ngAnimate",
      "ngResource",
      "ui.router"
    ])
    .config(require("./core.routes"))

    .value("API", "http://localhost:8080/api");

  return angular;
});