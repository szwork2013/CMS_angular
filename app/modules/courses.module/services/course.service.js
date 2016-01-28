define(function (require) {
  "use strict";

  Course.$inject = ["API", "$resource"];

  function Course(API, $resource) {
    return $resource(API + "/courses/:id", {id: "@id"}, {
      update: {
        method: "PUT"
      }
    });
  }

  return Course;
});