define(function (require) {
  "use strict";

  function Course($resource) {
    return $resource("../courses/:courseId.json", {}, {
      query: {method: "GET", params: {courseId: "courses"}, isArray: true}
    });
  }

  Course.$inject = ["$resource"];

  return Course;
});