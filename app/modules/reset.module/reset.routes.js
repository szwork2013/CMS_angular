define(function (require) {
  "use strict";

  ResetRoutes.$inject = ["$stateProvider"];

  function ResetRoutes($stateProvider) {
    $stateProvider
      .state("public.reset", {
        url: "/reset",
        views: {
          "content@core": {
            template: require("text!./templates/reset.tpl.html"),
            controller: "reset.ctrl as reset"
          }
        }
      });
  }

  return ResetRoutes;
});