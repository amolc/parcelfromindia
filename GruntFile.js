module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      apidoc: {
        myapp: {
          src: "api/",
          dest: "apidoc/"
        }
      },
      nodemon: {
        dev: {
          script: 'server.js'
        }
      },
      jest: {
        options: {
          coverage: true,
          testPathPattern: /.*test.js/
        }
      },
      run: {
        options: {
          // ...
        },
        npm_test_jest: {
          cmd: 'npm',
          args: [
            'test',
            '--silent'
          ]
        }
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    
    grunt.loadNpmTasks('grunt-apidoc');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-nodemon');
  
    // Default task(s).
    grunt.registerTask('default', ['apidoc','run:npm_test_jest','nodemon']);
  
  };