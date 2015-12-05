require.config({
    paths: {
        angular: "../vendor/bower/angular/angular.min",
        domReady: "../vendor/bower/requirejs-domready/domReady",
        ngRoute: "../vendor/bower/angular-route/angular-route.min",
        ngResource: "../vendor/bower/angular-resource/angular-resource.min",
        ngMessages: "../vendor/bower/angular-messages/angular-messages.min",
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