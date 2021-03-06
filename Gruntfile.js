module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {livereload: true},
            files: ['./*.hbs', 'assets/**', 'partials/**'],
            tasks: ''
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('ghost', ['watch']);
};