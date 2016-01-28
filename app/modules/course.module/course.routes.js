define(function (require) {
  "use strict";

  CourseRoutes.$inject = ["$stateProvider"];

  function CourseRoutes($stateProvider) {
    $stateProvider
      .state("course", {
        parent: "courses",
        url: "/:id",
        views: {
          "content@core": {
            template: require("text!./templates/course.tpl.html"),
            controller: "course.ctrl as course"
          }
        }
      });
  }

  return CourseRoutes;
});