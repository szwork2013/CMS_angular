require.config({
    paths: {
        angular: "../vendor/bower/angular/angular.min",
        domReady: "../vendor/bower/requirejs-domready/domReady",
        ngRoute: "../vendor/bower/angular-route/angular-route.min",
        text: "../vendor/bower/requirejs-text/text"
    },
    shim: {
        angular: {
            exports: "angular"
        },
        ngRoute: {
            deps: ["angular"]
        }
    },
    deps: ["bootstrap"]
});