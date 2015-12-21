require.config({
  paths: {
    angular: "../bower/angular/angular.min",
    domReady: "../bower/requirejs-domready/domReady",
    uiRouter: "../bower/angular-ui-router/release/angular-ui-router.min",
    ngResource: "../bower/angular-resource/angular-resource.min",
    text: "../vendor/bower/requirejs-text/text",
    bootstrap: "../vendor/bower/bootstrap/dist/js/bootstrap.min",
    jQuery: "../vendor/bower/jquery/dist/jquery.min"
    },
  shim: {
    angular: {
      exports: "angular"
    },
    ngRoute: {
      deps: ["angular"]
    },
    ngMessages: {
      deps: ["angular"]
    },
    bootstrap: {
      deps: ["jQuery"]
    }
  },
  deps: ["bootstraping"]
});