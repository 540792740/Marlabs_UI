var sass = require('node-sass');


module.exports = function(grunt){
    //Configuration
    grunt.initConfig({
        concat:{
            js:{
                src:['js/*.js'],
                dest:'build/scripts.js'
            },
            css:{
                src:['css/*.js'],
                dest:'build/style.css'
            }
        },
        sass:{
            options:{
                implementation:sass,
                sourceMap: true
            },
            build:{
                files:[{
                    src:'css/sass/styles.scss',
                    dest:'css/styles.css'
                }]
            }
        },
        uglify:{
            build:{
                files:[{
                    src:'build/script.js',
                    dest:'build/scripts.js'
                }]
            }
        }
    });



    //Load plugin
    grunt.loadNpmTasks('grunt-contrib-concat');

    //Register Tasks
    grunt.registerTask('concat-js',['concat:js']);

    grunt.registerTask('concat-css',['concat:css'])


    // grunt.registerTask('run',function () {
    //     console.log("Task is sleeping")
    // });
    // grunt.registerTask('sleep',function () {
    //     console.log("Task is sleeping")
    // })
};