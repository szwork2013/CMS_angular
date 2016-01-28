define(function (require) {
  "use strict";

  var angular = require("angular"),
      appCore = require("../core.module/core.module");

  angular
    .module("app.course", [
      "app.core"
    ])
    .config(require("./course.routes"))

    .controller("course.ctrl", require("./controllers/course.controller"));

  return angular;
});