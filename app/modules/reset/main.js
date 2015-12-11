define(function (require) {
  "use strict";

  var angular = require("angular"),
      ResetModule = angular.module("ResetModule", []);

  ResetModule.controller("ResetModuleCtrl", require("./controllers/ResetModuleCtrl"));

  return ResetModule;
});