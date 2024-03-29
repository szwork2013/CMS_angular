define(function (require) {
  "use strict";

  var angular = require("angular"),
      appCore = require("./modules/core.module/core.module"),
      appCourse = require("./modules/course.module/course.module"),
      appCourses = require("./modules/courses.module/courses.module"),
      appLogin = require("./modules/login.module/login.module"),
      appModules = require("./modules/modules.module/modules.module"),
      appRegister = require("./modules/register.module/register.module"),
      appReset = require("./modules/reset.module/reset.module"),
      appTests = require("./modules/tests.module/tests.module");

  angular
    .module("app", [
      "app.core",

      "app.course",
      "app.courses",
      "app.login",
      "app.modules",
      "app.register",
      "app.reset",
      "app.tests"
    ]);

  return angular;
});