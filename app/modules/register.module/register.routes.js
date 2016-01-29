define(function (require) {
  "use strcit";

  RegisterRoutes.$inject = ["$stateProvider"];

  function RegisterRoutes($stateProvider) {
    $stateProvider
      .state("public.register", {
        url: "register",
        views: {
          "content@core": {
            template: require("text!./templates/register.tpl.html"),
            controller: "register.ctrl as signup"
          }
        }
      });
  }

  return RegisterRoutes;
});