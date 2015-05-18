

var args = process.argv.slice(2);

var bucketName = args[1];

var uploadFiles = function() {
    var fs = require('fs');

    var walk = function(dir) {
        var results = []
        var list = fs.readdirSync(dir)
        list.forEach(function(file) {
            file = dir + '/' + file
            var stat = fs.statSync(file)
            if (stat && stat.isDirectory()) results = results.concat(walk(file))
            else results.push(file)
        })
        return results
    }

    var aws = require('aws-sdk');
    aws.config.loadFromPath('./grunt-aws.json');

    var s3 = new aws.S3();

    var folder = walk('PROD');


    folder.forEach(function(item) { /* etc etc */
          var params = {Bucket: 'seano2', Key: item, ContentType: 'binary', ContentEncoding: 'utf8', Body: item};

         s3.upload(params, function(err, data) {
             if (err) {
             console.log("Error uploading data: ", err);
             } else {
             console.log("Successfully uploaded data to myBucket/myKey");
             }
         });
    });

};

//uploadFiles();