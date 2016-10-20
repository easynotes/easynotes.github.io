module.exports = function(grunt) {

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      cssmin: {
        cssUglify: {
          src: 'build/style.css',
          dest: 'build/style.min.css'
        }
      },
      watch: {
        styles: {
          files: ['styles/*.scss'],
          tasks: ['build-styles'],
          options: {
              spawn: false,
          }
        }
      },
      sass: {
        dist: {
          files: {
            'build/style.css': 'styles/project-G.scss'
          }
        }
      },
      autoprefixer: {
        options: {
          browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        your_target: {
          src: 'build/style.css'
        },
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  
  grunt.registerTask('build-styles', ['sass', 'autoprefixer', 'cssmin']);
  grunt.registerTask('build-scripts', []);

  grunt.registerTask('default', ['build-styles', 'build-scripts']);

};