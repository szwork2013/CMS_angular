define(function (require) {
  "use strict";

  var angular = require("angular"),

  CourseModule = angular
    .module("CourseModule", [])

    .controller("CourseModuleCtrl", require("./controllers/CourseModuleCtrl"));

  return CourseModule;
});