require.config({
    paths: {
        angular: "vendor/bower/angular/angular",
        ngRoute: "vendor/bower/angular-route/angular-route",
        underscore: "vendor/bower/underscore/underscore"
    },
    shim: {
        angular: {
            exports: "angular"
        },
        ngRoute: {
            deps: ["angular"]
        },
        underscore: {
            exports: "_"
        }
    },
    packages: ["starter"]
});

require(["angular", "app"], function (angular) {
    angular.bootstrap(document.documentElement, ["app"]);
});