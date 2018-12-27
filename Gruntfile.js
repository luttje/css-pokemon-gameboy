/*global module:false*/
const sass = require('node-sass');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      '\n * License: <%= pkg.license %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/scripts/<%= pkg.name %>.js'],
        dest: 'dist/scripts/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/scripts/<%= pkg.name %>.min.js'
      }
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
        output: true
      },
      dist: {
        files: {
          'dist/styles/<%= pkg.name %>.css': 'src/scss/main.scss'
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
      demo: {
        src: 'src/demo.html',
        dest: 'dist/demo.html'
      }
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');

  // Default task.
  grunt.registerTask('default', ['copy', 'concat', 'uglify', 'sass']);

};
