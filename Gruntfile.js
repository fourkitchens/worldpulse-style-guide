'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      options: {
        livereload: 9001
      },
      sass: {
        files: ['sass/{,**/}*.scss'],
        tasks: ['compass:dev'],
        options: {
          livereload: false
        }
      },
      css: {
        files: ['css/{,**/}*.css']
      },
      images: {
        files: ['images/**']
      },
      js: {
        files: [
          'js/{,**/}*.js',
          '!js/{,**/}*.js'
        ],
        tasks: ['jshint', 'uglify:dev']
      }
    },

    compass: {
      options: {
        config: 'config.rb',
        bundleExec: true
      },
      dev: {
        options: {
          environment: 'development'
        }
      },
      dist: {
        options: {
          environment: 'production',
          imagesDir: 'img',
          force: true,
          outputStyle: 'compressed',
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'js/{,**/}*.js',
        '!js/{,**/}*.min.js'
      ]
    },

    grunticon: {
      development: {
        files: [{
          expand: true,
          cwd: 'temp-icons/icons',
          src: ['*.svg'],
          dest: "temp-icons/grunticon",
        }],
        options: {
          previewhtml: "icons.html",
          defaultWidth: "64px",
          defaultHeight: "64px",
          customselectors: {
            "abuse": [".flag-wp-flag-comments-abuse .flag-action"],
            "abuse-hover": [".flag-wp-flag-comments-abuse a:hover"],
            "abuse-reported": [".flag-wp-flag-comments-abuse .unflag-action"],
            "cc-hover": [".icon-cc:hover"],
            "redact-hover": [".icon-redact:hover"],
            "edit-hover": [".icon-edit:hover"],
            "friends-highlight": [".field-name-field-post-access input:checked + label .icon-friends"],
            "private-highlight": [".field-name-field-post-access input:checked + label .icon-private"],
            "public-highlight": [".field-name-field-post-access input:checked + label .icon-public"],
            "reply-hover": [".icon-reply:hover"]
          }
        }
      }
    },

    'string-replace': {
      icons: {
        files: {
          'temp-icons/': 'icons/*.svg',
        },
        options: {
          replacements: [{
            pattern: '512px',
            replacement: '32px'
          },
          {
            pattern: '512px',
            replacement: '32px'
          }]
        }
      },
    },

    imagemin: {
      icons: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'temp-icons/grunticon',
          src: ['**/*.png'],
          dest: 'img/icons'
        }]
      },
      dist: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'images',
          src: ['**/*.png', '**/*.jpg'],
          dest: 'img/'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images',
          src: '**/*.svg',
          dest: 'img'
        }]
      }
    },

    uglify: {
      dev: {
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
        files: [{
          expand: true,
          cwd: 'js',
          src: ['**/*.js', '!**/*.min.js'],
          dest: 'js',
          ext: '.min.js'
        }]
      },
      dist: {
        options: {
          mangle: true,
          compress: true
        },
        files: [{
          expand: true,
          cwd: 'js',
          src: ['**/*.js', '!**/*.min.js'],
          dest: 'js',
          ext: '.min.js'
        }]
      }
    },

    copy: {
      icons: {
        files: [
          {
            expand: true,
            cwd: 'temp-icons/grunticon',
            src: ['**', '!**/*.png'],
            dest: 'img/icons'
          },
        ]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'images',
            src: ['**', '!**/*.svg', '!**/*.png', '!**/*.jpg'],
            dest: 'img'
          }
        ]
      }
    },

    parallel: {
      assets: {
        grunt: true,
        tasks: ['imagemin:dist', 'svgmin', 'uglify:dist', 'copy:dist']
      }
    },

    clean: {
      icons: ["temp-icons"],
      dist: ["img", "css", ".sass-cache"]
    },
  });


  grunt.event.on('watch', function(action, filepath) {
    grunt.config([
      'compass:dev',
      'jshint'
    ], filepath);
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-parallel');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-string-replace');

  // grunt icons: This will ensure all of our icons are created properly.
  grunt.registerTask('icons', [
    'string-replace:icons',
    'grunticon:development',
    'imagemin:icons',
    'copy:icons',
    'clean:icons',
  ]);

  // grunt js: Runs jslinting and minifies the js if it is linted.
  grunt.registerTask('js', [
    'jshint',
    'uglify:dev',
  ]);

  // grunt sass: Compiles all of the Sass in our directory.
  grunt.registerTask('sass', [
    'compass:dev',
  ]);

  // grunt build: Does a full rebuild of our icons, minifies images, compiles
  //   the Sass, and lints our js
  grunt.registerTask('build', [
    'clean:dist',
    'icons',
    'parallel:assets',
    'compass:dist',
    'jshint'
  ]);

  // grunt / grunt default: Cleans our Sass cache files, builds our icons, and
  //   compiles the Sass from scratch. Run this after you switch branches.
  grunt.registerTask('default', [
    'jshint',
    'clean:dist',
    'icons',
    'compass:dev',
  ]);
};
