module.exports = function(grunt) {

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
      server: {
        options: {
          port: 9001,
          base: "app"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask("server", ["connect:server", "watch"]);

}