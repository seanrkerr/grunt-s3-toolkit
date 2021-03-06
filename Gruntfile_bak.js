// Gruntfile.js
module.exports = function(grunt) {
    grunt.registerTask('default', 'Say hello!', function() {
        askQuestion(this.async());

    });

    grunt.registerTask('start', function () {
        var done = this.async();
        // Run some sync stuff.

        grunt.util.spawn({ cmd: 'node', args: ['S3ListBuckets.js'], opts: {stdio: 'inherit'}});
        grunt.log.writeln('Processing task...');
        doSomethingAsync(done);

    });

    grunt.registerMultiTask('slim', 'Server Slim Compiler', function() {
        var options;
        console.log('In the slim');
        options = {};
        options.cmd = 'node S3ListBuckets.js';
        options.grunt = true;
        console.log(options);
        return grunt.util.spawn(options, function(err, res, cod) {
            console.log('in the spawn');
            if (err) {
                return grunt.log.error(err);
            } else {
                grunt.log.oklns('success');
                return grunt.log.writeln(res);
            }
        });
    });

    grunt.registerTask('asyncfoo', 'My "asyncfoo" task.', function() {
        // Force task into async mode and grab a handle to the "done" function.
        var done = this.async();
        // Run some sync stuff.
        grunt.log.writeln('Processing task...');

        grunt.util.spawn({ cmd: 'node', args: ['S3ListBuckets.js'], opts: {stdio: 'inherit'}});

    });

    grunt.registerTask('asyncme', 'My asynchronous task.', function() {
        var done = this.async();
        doSomethingAsync(done);
    });

};

function doSomethingAsync(done) {
  done();
}


function askQuestion(done) {
    var readline = require('readline');

    process.stdin.resume();
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('What do you think of node.js? ', function(answer) {

        //console.log('Thank you for your valuable feedback:', answer);
        rl.close();
        done();
    });
}


/*
module.exports = function(grunt) {};

grunt.initConfig({
    concurrent: {
        dev: ['watch']
    },
    slim: {
        dev: {
            expand: true,
            src: 'views',
            dest: 'views/'
        }
    },
    watch: {
        slim: {
            files: 'views/!**.slim',
            tasks: ['slim']
        }
    }
});

grunt.registerMultiTask('slim', 'Server Slim Compiler', function() {
    var options;
    console.log('In the slim');
    options = {};
    options.cmd = 'node S3ListBuckets.js';
    options.grunt = true;
    console.log(options);
    return grunt.util.spawn(options, function(err, res, cod) {
        console.log('in the spawn');
        if (err) {
            return grunt.log.error(err);
        } else {
            grunt.log.oklns('success');
            return grunt.log.writeln(res);
        }
    });
});

grunt.loadNpmTasks('grunt-contrib-watch');

grunt.loadNpmTasks('grunt-concurrent');

grunt.registerTask('default', ['concurrent:dev']);*/

/*
*
*
* // Gruntfile.js
 module.exports = function(grunt) {
 grunt.registerTask('list', function () {
 var done = this.async();
 grunt.util.spawn({ cmd: 'node', args: ['S3ListBuckets.js'], opts: {stdio: 'inherit'}}, function(e, result) {
 grunt.log.writeln('List created');
 done();
 });
 });

 /*grunt.registerTask('createBucket', function () {
 var done = this.async();
 grunt.util.spawn({ cmd: 'node', args: ['S3ListBuckets.js'], opts: {stdio: 'inherit'}}, function(e, result) {
 grunt.log.writeln('List created');
 done();
 });
 });*/

grunt.registerTask('default', 'Say hello!', function() {
    askQuestion(this.async());

});

grunt.registerTask('create', function (n) {

    if (n == null) {
        grunt.log.warn('Post name must be specified, like makePost:PostNameGoesHere.');
    }

    var done = this.async();
    grunt.util.spawn({ cmd: 'node', args: ['S3CreateBucket.js', n], opts: {stdio: 'inherit'}}, function() {
        done();
    });
});



grunt.registerTask('set_global', 'Set a global var.', function(name, val) {
    global[name] = val;
});

grunt.registerTask('set_config', 'Set a config property.', function(name, val) {
    grunt.config.set(name, val);
});

grunt.registerTask('my_build', 'Run all my build tasks.', function(n) {
    if (n == null) {
        grunt.warn('build num must be specified.');
    }
    grunt.task.run('foo:' + n + ' bar:' + n + ' baz:' + n);
});


};

function askQuestion(done,grunt) {
    var readline = require('readline');

    process.stdin.resume();
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('What do you think of node.js? ', function(test) {

        console.log('Thank you for your valuable feedback:', test);

        grunt.task.run('create');


        // var done = this.async();

        //rl.close();
        //done();
    });
}

*
* */