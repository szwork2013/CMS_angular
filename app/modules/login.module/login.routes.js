define(function (require) {
  "user strict";

  LoginRoutes.$inject = ["$stateProvider"];

  function LoginRoutes($stateProvider) {
    $stateProvider
      .state("public", {
        parent: "core",
        abstract: true,
        data: {
          authorize: false
        }
      })
      .state("public.login", {
        url: "/login",
        views: {
          "content@core": {
            template: require("text!./templates/login.tpl.html"),
            controller: "login.ctrl as login"
          }
        }
      });
  }

  return LoginRoutes;
});