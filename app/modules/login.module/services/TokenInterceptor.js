define(function (require) {
  "use strict";

  function Interceptor(session) {
    var sessionInjector = {
      request: function(config) {
        config.headers["x-access-token"] = session.getToken();
        return config;
      }
    };
    return sessionInjector;
  }

  Interceptor.$inject = ["session"];

  return Interceptor;
});