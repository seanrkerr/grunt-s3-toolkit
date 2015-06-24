// Gruntfile.js
module.exports = function(grunt) {

    grunt.registerTask('list', function () {
        var done = this.async();
        grunt.util.spawn({ cmd: 'node', args: ['S3ListBuckets.js'], opts: {stdio: 'inherit'}}, function(e, result) {
            grunt.log.writeln('List created');
            done();
        });
    });

    grunt.registerTask('create', function (n) {

        if (n == null) {
            grunt.log.warn('A bucket name bust be specified');

        } else {
            var done = this.async();
            grunt.util.spawn({ cmd: 'node', args: ['S3CreateBucket.js', n], opts: {stdio: 'inherit'}}, function() {
                done();
            });
        }
    });

};
