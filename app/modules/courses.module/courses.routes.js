define(function (require) {
  "use strict";

  CoursesRoutes.$inject = ["$stateProvider"];

  function CoursesRoutes($stateProvider) {
    $stateProvider
      .state("courses", {
        parent: "core",
        url: "/courses",
        views: {
          "content@core": {
            template: require("text!./templates/courses.tpl.html"),
            controller: "courses.ctrl as courses"
          }
        }
      });
  }

  return CoursesRoutes;
});