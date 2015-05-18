

var fs = require('fs');

var aws = require('aws-sdk');

aws.config.loadFromPath('./grunt-aws.json');

var s3 = new aws.S3();

s3.listBuckets(function (err, data) {
    if (err) {
        console.log("Error:", err);
    }
    else {
        for (var index in data.Buckets) {
            var bucket = data.Buckets[index];
            console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
        }
    }
});
