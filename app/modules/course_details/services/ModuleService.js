define(function (require) {
  "use strict";

  var angular = require("angular"),
      ModuleService;
  require("ngResource");

  ModuleService = angular.module("ModuleService", ["ngResource"]);

  ModuleService.factory("Module", ["$resource",
    function ($resource) {
      return $resource("../courses/:moduleId.json", {}, {
        query: {method: "GET", params: {moduleId: "modules"}, isArray: true}
      });
    }]);

  return ModuleService;
});