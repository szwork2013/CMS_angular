define(function (require) {
  "use strict";

  TestsRoutes.$inject = ["$stateProvider"];

  function TestsRoutes($stateProvider) {
    $stateProvider
      .state("tests", {
        parent: "modules",
        url: "/tests/:testId",
        views: {
          "content@core": {
            template: require("text!./templates/tests.tpl.html"),
            controller: "tests.ctrl as tests"
          }
        }
      });
  }

  return TestsRoutes;
});