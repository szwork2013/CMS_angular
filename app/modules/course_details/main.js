define(function (require) {
  "use strict";

  var angular = require("angular"),
      CourseDetailModule = angular.module("CourseDetailModule", []);

  CourseDetailModule.controller("CourseDetailCtrl", require("./controllers/CourseDetailCtrl"));

  return CourseDetailModule;
});