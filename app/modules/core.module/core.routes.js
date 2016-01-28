define(function (require) {
  "use strict";

  CoreRoutes.$inject = ["$stateProvider",];

  function CoreRoutes($stateProvider) {
    $stateProvider
      .state("core", {
        abstract: true,
        views: {
          "header@": {
            template: require("text!./layout.tpls/header.html")
          },
          "main@": {
            template: require("text!./layout.tpls/content.html")
          },
          "footer@": {
            template: require("text!./layout.tpls/footer.html")
          }
        }
      });
  }

  return CoreRoutes;
});