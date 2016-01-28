define(function (require) {
  "use strict";

  function assignToRootScope($rootScope, $state, auth, session) {
    $rootScope.$on("$stateChangeStart", function (e, toState, toParams) {
      var authorize = toState.data.authorize,
          security = toState.data.security,
          user = session.getUser();

      if (authorize && !user) {
        e.preventDefault();
        $state.go("public.login");
      }
      if (security && user.role !== "admin") {
        e.preventDefault();
      }
    });
  }

  assignToRootScope.$inject = ["$rootScope", "$state", "auth", "session"];

  return assignToRootScope;
});