define(function (require) {
  "use strict";

  var angular = require("angular"),
      CourseService = angular.module("CourseService", ["ngResource"]);

  CourseService.factory("Course", ["$resource",
    function ($resource) {
      return $resource(""courses/:course.id.json, {}, {
        query: {method: "GET", params: {course.id: "courses"}, isArray: true}
      });
    }]);

  return CourseService;
});