define(function (require) {
  "use strict";

  Module.$inject = ["API", "$resource"];

  function Module(API, $resource) {
    return $resource(API + "/modules/:moduleId", {moduleId: "@id"}, {
      update: {
        method: "PUT"
      }
    });
  }

  return Module;
});