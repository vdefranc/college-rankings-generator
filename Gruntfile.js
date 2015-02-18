module.exports = function(grunt) {
	//load all grunt tasks
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	grunt.initConfig({
	    watch: {
	    	js: {
	    		files: ['src/js/*.js'],
		    	tasks: ['jshint', 'concat', 'jasmine',]
	    	},
	      css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
	    },
	    jshint: {
	    	files: ['src/js/*.js', 'test/rankings-specs.js'],
	      	options: {
	        	globals: {
	          		jQuery: true,
	          		angular: true
	        	}
	      	}
	    },
		jasmine : {
			src : ['dist/rankings.js'],
			options : {
			    specs : 'test/rankings-specs.js',
			    vendor: [
					'lib/angular.min.js',
					'lib/angular-mocks.js',
					'lib/jquery-1.11.1.min.js'
				]
			}
		},
		sass: {
			dist: {
				files: {
					'dist/rankings.css' : 'src/css/rankings.scss'
				}
			}
		},
		concat: {
			js: {
				src: [
					'src/js/*.js'
				],
					dest: 'dist/rankings.js'
				}
			}
	});

	// Default task(s).
	grunt.registerTask('default', ['watch']);
};