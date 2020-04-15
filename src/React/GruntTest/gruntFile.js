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
        }
    });



    //Load plugin
    grunt.loadNpmTasks('grunt-contrib-concat');

    //Register Tasks
    grunt.registerTask('concat-js',['concat:js']);

    grunt.registerTask('concat-js',['concat:css'])


    // grunt.registerTask('run',function () {
    //     console.log("Task is sleeping")
    // });
    // grunt.registerTask('sleep',function () {
    //     console.log("Task is sleeping")
    // })
};