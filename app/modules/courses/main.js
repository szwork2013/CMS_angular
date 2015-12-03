define(function (require) {
  "use strict";

  var angular = require("angular"),
      CoursesModule = angular.module("CoursesModule", []);

  CoursesModule.controller("CoursesCtrl", require("./controllers/CoursesCtrl"));

  return CoursesModule;
});