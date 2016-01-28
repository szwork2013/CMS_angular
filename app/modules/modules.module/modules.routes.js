define(function (require) {
  "use strict";

  ModulesRoutes.$inject = ["$stateProvider"];

  function ModulesRoutes($stateProvider) {
    $stateProvider
      .state("modules", {
        parent: "course",
        url: "/modules/:modulesId",
        views: {
          "content@core": {
            template: require("text!./templates/modules.tpl.html"),
            controller: "modules.ctrl as modules"
          }
        }
      });
  }

  return ModulesRoutes;
});