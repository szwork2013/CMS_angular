define(function (require) {
  "use strict";

  var angular = require("angular"),
      ngResource = require("ngResource"),

  CourseDetailModule = angular
    .module("CourseDetailModule", ["ngResource"])

    .controller("CourseDetailCtrl", require("./controllers/CourseDetailCtrl"))

    .factory("Module", require("./services/ModuleService"));

  return CourseDetailModule;
});