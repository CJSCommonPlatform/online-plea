'use strict';


module.exports = function (grunt) {
  
  
  // Configurations
  
  grunt.initConfig({
    
    
    // Express
    
    express: {
      
      dev: {
        
        options: {
          script: 'server.js',
          port: 3000
        }
        
      }
      
    },
    
    
    // Copy
    
    copy: {
      
      govuk_images: {
        expand: true,
        cwd: 'node_modules/govuk_template_mustache/assets/images',
        src: '**',
        dest: 'public/govuk/images/'
      },
      
      govuk_css: {
        expand: true,
        cwd: 'node_modules/govuk_template_mustache/assets/stylesheets',
        src: '**',
        dest: 'public/govuk/stylesheets/'
      },
        
      govuk_elements: {
        expand: true,
        cwd: 'node_modules/govuk-elements-sass/public/sass/',
        src:  '**',
        dest: 'public/govuk/sass/'
      },
      
      govuk_frontend_toolkit_scss: {
        expand: true,
        cwd: 'node_modules/govuk_frontend_toolkit/stylesheets/',
        src:  '**',
        dest: 'public/govuk/sass/'
      },
      
      govuk_frontend_toolkit_img: {
        expand: true,
        cwd: 'node_modules/govuk_frontend_toolkit/images/',
        src:  '**',
        dest: 'public/govuk/images/'
      }
      
    },
    
    
    // Sass
    
    sass: {
      
      dev: {
        
        files: {
          'public/stylesheets/main.css' : 'public/sass/main.scss'
        },
        
        options: {
          outputStyle: 'expanded',
          imagePath: '/public/images/'
        }
        
      }
      
    },

    
    // Watch for changes
    
    watch: {
      
      express: {
        files: ['server.js', 'Gruntfile.js'],
        tasks: ['express'],
        options: { noswapn: true }
      },
      
      css: {
        files: ['public/sass/**/*.scss'],
        tasks: ['sass'],
        options: { nospawn: true }
      }
      
    }
    
    
  });
  
  
   [
    'grunt-express-server',
    'grunt-contrib-copy',
    'grunt-contrib-watch',
    'grunt-sass'
   ].forEach(function (task) {
     grunt.loadNpmTasks(task);
   });
   
   
   grunt.registerTask('default', [
     'express',
     'copy:govuk_images',
     'copy:govuk_css',
     'copy:govuk_elements',
     'copy:govuk_frontend_toolkit_scss',
     'copy:govuk_frontend_toolkit_img',
     'sass',
     'watch'
   ]);
  
  
}