module.exports = function(grunt) {
	//load all grunt tasks
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	grunt.initConfig({
	    watch: {
	    	js: {
	    		files: ['src/js/*.js'],
		    	tasks: ['concat','jshint']
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
					'lib/angular-1.2.27.min.js',
					'lib/angular-mocks-1.2.27.js'
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
	grunt.registerTask('test', ['jasmine']);
};