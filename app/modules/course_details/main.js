define(function (require) {
  "use strict";

  var angular = require("angular"),
      ModuleService = require("./services/ModuleService"),
      CourseDetailModule = angular.module("CourseDetailModule", ["ModuleService"]);


  CourseDetailModule.controller("CourseDetailCtrl", require("./controllers/CourseDetailCtrl"));

  return CourseDetailModule;
});