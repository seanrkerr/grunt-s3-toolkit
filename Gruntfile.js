// Gruntfile.js
module.exports = function(grunt) {
    grunt.registerTask('list', function () {
        var done = this.async();
        grunt.util.spawn({ cmd: 'node', args: ['S3ListBuckets.js'], opts: {stdio: 'inherit'}}, function(e, result) {
            grunt.log.writeln('List created');
            done();
        });
    });
};


