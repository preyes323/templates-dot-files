module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'public/javascripts/application.js': ['processing/javascripts/all.js'],
        },
      },
    },
    bower_concat: {
      all: {
        dest: 'processing/javascripts/all.js',
      },
    },
    clean: ['processing'],
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['bower_concat', 'uglify', 'clean']);
};
