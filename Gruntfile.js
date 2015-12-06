module.exports = function(grunt) {

  var connect = require("connect"),
      serveStatic = require("serve-static");

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    jshint: {
      all: ["app/*"]
    },

    sass: {
      dist: {
        options: {
          style: "compressed"
        },
        files: {
          "app/styles/main.min.css" : "app/styles/scss/index.scss"
        }
      }
    },

    watch: {
      dev: {
        files: ["app/*", "!app/img/*", "!app/styles/*"],
        options: {
          livereload: true
        },
        tasks: ["jshint", "sass"]
      }
    },

    connect: {
      dev: {
        options: {
          livereload: true,
          port: 8034,
          middleware: function(connect) {
            return [
              serveStatic('.tmp'),
              connect().use('/vendor/bower', serveStatic('./vendor/bower')),
              connect().use('/courses/', serveStatic('./courses/')),
              serveStatic('app')
            ]
          }
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask("server", ["connect:dev", "watch"]);

}