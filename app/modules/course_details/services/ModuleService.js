define(function (require) {
  "use strict";

  function Module($resource) {
    return $resource("../courses/:moduleId.json", {}, {
      query: {method: "GET", params: {moduleId: "modules"}, isArray: true}
    });
  }

  Module.$inject = ["resource"];

  return Module;
});