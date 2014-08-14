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
          '!js/{,**/}*.js',
          '!js/flexnav/**'
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
        '!js/{,**/}*.min.js',
        '!js/flexnav/**'
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
          colors: {
            red: '#b00911',
            red_dark: '#71060b',
            blue: '#149ce4',
            light: '#8d7b7b',
            highlight: '#fefefe',
          },
          customselectors: {
            "abuse": [".flag-wp-flag-comments-abuse .flag-action"],
            "abuse-red": [".icon-abuse:hover", ".flag-wp-flag-comments-abuse a:hover"],
            "abuse-red_dark": [".icon-abuse.unflag-action"],
            "cc-blue": [".icon-cc:hover"],
            "close": [".chosen-container-multi", ".search-choice-close"],
            "close-blue": [".icon-close:hover", "#cboxClose:hover", ".chosen-container-multi .search-choice-close:hover"],
            "close-highlight": ["#cboxClose"],
            "down-light": [".chosen-container-single .chosen-single", ".chosen-container-multi .chosen-choices"],
            "drag": [".icon-edit:hover", ".draggable a.tabledrag-handle .handle"],
            "drag-blue": [".icon-edit:hover", ".draggable a.tabledrag-handle .handle:hover"],
            "edit-blue": [".icon-edit:hover"],
            "facebook-blue": ["a.icon-facebook:hover"],
            "youtube-blue": ["a.icon-youtube:hover"],
            "friends-highlight": [".field-name-field-post-access input:checked + label .icon-friends"],
            "group-highlight": [".field-name-field-post-type input:checked + label .icon-group"],
            "home": [".breadcrumb a:hover .icon-home-light"],
            "journal-highlight": [".field-name-field-post-type input:checked + label .icon-journal"],
            "next-blue": [".icon-next:hover", "#cboxNext:hover"],
            "next-highlight": ["#cboxNext"],
            "prev-blue": [".icon-prev:hover", "#cboxPrevious:hover"],
            "prev-highlight": ["#cboxPrevious"],
            "private-highlight": [".field-name-field-post-access input:checked + label .icon-private"],
            "public-highlight": [".field-name-field-post-access input:checked + label .icon-public"],
            "redact-red": [".icon-redact:hover"],
            "reply-blue": [".icon-reply:hover"],
            "search-light": [".chosen-container-single input[type=\"text\"]"],
            "search-highlight": [".pane-search-api-page-search input[type=\"submit\"]"],
            "twitter-blue": ["a.icon-twitter:hover"],
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
          src: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.jpeg'],
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
          src: ['**/*.js', '!**/*.min.js', '!**/flexnav/**'],
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
          src: ['**/*.js', '!**/*.min.js', '!**/flexnav/**'],
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
            src: ['**', '!**/*.svg', '!**/*.png', '!**/*.jpg', '**/*.gif', '**/*.jpeg'],
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
