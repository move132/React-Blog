

module.exports = function (grunt) { 

	  grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    copy: {
		  	main: {
		    	 
			    files: [
			      // includes files within path
			      //{expand: true, src: ['src/*'], dest: 'dest/', filter: 'isFile'},

			      // includes files within path and its sub-directories
			      //{expand: true, src: ['src/**'], dest: 'dest/'},

			      // makes all src relative to cwd
			      //{expand: true, cwd: 'src/', src: ['**'], dest: 'dest/'},

			      // flattens results to a single level
			      {expand: true, flatten: true, src: ['src/**'], dest: 'dest/', filter: 'isFile'},
			    ]
		  	}
		}
	  });

	  // 加载包含 任务的插件。
	 grunt.loadNpmTasks('grunt-contrib-copy');

	  // 默认被执行的任务列表。
	  grunt.registerTask('default', ['copy']);
}