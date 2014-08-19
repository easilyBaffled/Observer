module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        react: {
            dynamic_mappings: {
              files: [
                {
                  expand: true,
                  cwd: 'jsx/',
                  src: ['**/*.jsx'],
                  dest: 'js/',
                  ext: '.js'
                }
              ]
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['jsx/*.jsx', 'js/*.js', 'css/*.scss'],
                tasks: ['react', 'concat', 'sass'],
                options: {
                    spawn: false,
                },
            css: {
                files: ['css/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false,
                }
            },
            }
        },
        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
                src: ['js/lib/*.js', 'js/*.js'],//js/*.js should always be last so the proper libraries come before it in the file
                dest: 'prod/built.js'
            }
        },
        uglify: {
            build: {
                src: 'prod/built.js',
                dest: 'prod/built.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    trace: 'true'
                },
                files: {
                    'prod/built.css': 'css/*.scss'
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'prod/*.css': 'prod/*.css'
                }
            }
        },

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-react');
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['react', 'concat', 'uglify', 'sass', 'autoprefixer', 'watch' ]);

};