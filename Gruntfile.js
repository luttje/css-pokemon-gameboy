/*global module:false*/
const sass = require('node-sass');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist/**'],
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
        output: true
      },
      dist: {
        files: {
          'dist/styles/css-pokemon-gameboy.css': 'src/scss/main.scss',
          'dist/styles/github.css': 'src/scss/github.scss',
        }
      }
    },
    copy: {
      fonts: {
        expand: true,
        flatten: true,
        src: ['src/fonts/*'],
        dest: 'dist/styles/fonts/',
        filter: 'isFile'
      },
      images: {
        expand: true,
        cwd: 'src/images/',
        src: ['**'],
        dest: 'dist/styles/images/'
      },
      scripts: {
        expand: true,
        cwd: 'src/',
        src: 'scripts/**',
        dest: 'dist/'
      },
      meta: {
        expand: true,
        cwd: 'src/',
        src: ['*.png', '*.ico', 'site.webmanifest'],
        dest: 'dist/'
      },
      demo: {
        src: 'src/demo.html',
        dest: 'dist/index.html'
      },
      template: {
        src: 'src/template.html',
        dest: 'dist/template.html'
      },
    },
    watch: {
      scripts: {
        files: ['src/**'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');

  // Default task.
  grunt.registerTask('default', ['clean', 'copy', 'sass']);
};
