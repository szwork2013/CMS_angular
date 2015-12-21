define(function (require) {
  "use strict";

  function TokenInterceptor($httpProvider) {
    $httpProvider.interceptors.push("Interceptor");
  }

  TokenInterceptor.$inject = ["$httpProvider"];

  return TokenInterceptor;
});