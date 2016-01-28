define(function (require) {
  "use strict";

  var angular = require("angular"),
      appCore = require("../core.module/core.module");

  angular
    .module("app.courses", [
      "app.core"
    ])
    .controller("courses.ctrl", require("./controllers/courses.controller"))

    .config(require("./courses.routes"))

    .factory("Course", require("./services/course.service"));

  return angular;
});