define(function (require) {
  "use strict";

  Test.$inject = ["API", "$resource"];

  function Test(API, $resource) {
    return $resource(API + "/tests/:testId", {testId: "@testId"}, {
      update: {
        method: "PUT"
      }
    });
  }

  return Test;
});