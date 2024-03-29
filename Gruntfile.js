module.exports = function (grunt) {
  "use strict";

  var serveStatic = require("serve-static"),
      connect = require("connect");

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: ["build"],

    jshint: {
      dev: {
        src: ["app/*", "!app/styles", "!app/index.html"]
      },
    },

    sass: {
      dev: {
        options: {
          style: "compressed"
        },
        files: {
          "app/styles/main.min.css": "app/styles/scss/index.scss",
        }
      },

      prod: {
        options: {
          style: "compressed"
        },
        files: {
          "build/styles/main.min.css": "app/styles/scss/index.scss",
        }
      }

    },

    copy: {
      html: {
        files:
          [{expand: true, src: ["app/index.html"], flatten: true, dest: "build/"}]
      },

      images: {
        files:
          [{expand: true, src: ["app/img/*"], flatten: true, dest: "build/img"}]
      }
    },

    bowercopy: {
      css: {
        options: {
          destPrefix: "build/styles"
        },
        files: {
          "bootstrap.min.css": "bootstrap/dist/css/bootstrap.min.css"
        }
      },
      fonts: {
        options: {
          destPrefix: "build/"
        },
        files: {
          "fonts": "bootstrap/dist/fonts"
        }
      }
    },

    watch: {
      dev: {
        options: {
          livereload: true
        },
        files: ["app/**", "!app/styles/", "!app/img/**"],
          tasks: ["jshint:dev", "sass:dev", "autoprefixer", "trimtrailingspaces:main"]
        }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: "app/",
          include: ["main"],
          insertRequire: ["main"],
          mainConfigFile: "app/main.js",
          name: "../bower/almond/almond",
          findNestedDependencies: true,
          out: "build/main.js"
        }
      }
    },

    processhtml: {
      dist: {
        files: {
          "build/index.html": ["app/index.html"]
        }
      }
    },

    connect: {
      dev: {
        options: {
          livereload: true,
            port: 8034,
            middleware: function(connect) {
              return [
                serveStatic(".tmp"),
                connect().use("/vendor/bower", serveStatic("./vendor/bower")),
                serveStatic("app")
              ]
            }
        }
      },

      prod: {
        options: {
          livereload: true,
            port: 8834,
            middleware: function(connect) {
              return [
                serveStatic("build")
              ]
            }
        }
      }
    },

    autoprefixer: {
      dist: {
        files: {
          "build/styles/main.min.css": "build/styles/main.min.css"
        }
      }
    },

    trimtrailingspaces: {
      main: {
        src: ["app/**/*.js", "!app/img"],
        options: {
          filter: 'isFile',
          encoding: 'utf8',
          failIfTrimmed: false
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-bowercopy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-processhtml");
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-trimtrailingspaces");


  grunt.registerTask("build:dev", ["jshint:dev", "sass:dev"]);
  grunt.registerTask("build:prod", ["clean", "jshint:dev", "sass:prod", "autoprefixer", "copy:images", "bowercopy", "processhtml", "requirejs:compile"]);
  grunt.registerTask("server:dev", ["connect:dev", "watch"]);
  grunt.registerTask("server:prod", ["connect:prod", "watch"]);
  grunt.registerTask("default", []);
};