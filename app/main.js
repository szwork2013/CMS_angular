require.config({
  paths: {
    angular: "../vendor/bower/angular/angular.min",
    bootstrap: "../vendor/bower/bootstrap/dist/js/bootstrap.min",
    domReady: "../vendor/bower/requirejs-domready/domReady",
    jQuery: "../vendor/bower/jquery/dist/jquery.min",
    ngAnimate: "../vendor/bower/angular-animate/angular-animate.min",
    ngResource: "../vendor/bower/angular-resource/angular-resource.min",
    text: "../vendor/bower/requirejs-text/text",
    uiBootstrap: "../vendor/bower/angular-bootstrap/ui-bootstrap-tpls.min",
    uiRouter: "../vendor/bower/angular-ui-router/release/angular-ui-router.min"
  },
  shim: {
    angular: {
      exports: "angular"
    },
    ngResource: {
      deps: ["angular"]
    },
    uiBootstrap: {
      deps: ["angular"]
    },
    uiRouter: {
      deps: ["angular"]
    }
  },
  deps: ["bootstraping"]
});