define(function (require) {
  "use strict";

  var angular = require("angular"),
      AuthenticationService = require("../login/services/AuthenticationService"),
      TokenInterceptor = angular.module("TokenInterceptor", ["AuthenticationService"]);

  TokenInterceptor.factory("TokenInterceptor", function ($q, $window, $location, AuthenticationService) {
    return {
      req: function (config) {
        config.headers = config.headers || {};
        if ($window.sessionStorage.token) {
          config.headers.Authorization = "Bearer" + $window.sessionStorage.token;
        }
        return config;
      },
      reqErr: function (rejection) {
        return $q.reject(rejection);
      },
      res: function (res) {
        if (res != null && res.status === 200 && $window.sessionStorage.token && !AuthenticationService.isLogged ) {
          AuthenticationService.isLogged = true;
        }
        return res || $q.when(res);
      },
      resErr: function (rejection) {
        if (rejection != null && rejection.status === 401 && ($window.sessionStorage.token || AuthenticationService.isLogged)) {
          delete $window.sessionStorage.token;
          AuthenticationService.isLogged = false;
          $location.path("/login");
        }
        return $q.reject(rejection);
      }
    }
  });

  return TokenInterceptor;
});