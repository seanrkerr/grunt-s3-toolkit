
var args = process.argv.slice(2);

var bucketName = args[0];

var createBucket = function (bucketName) {

	if (bucketName.length <= 2) {
		console.log('the bucket[' + bucketName + '] is too short');
		return;
	}

    var fs = require('fs');

    var aws = require('aws-sdk');

    aws.config.loadFromPath('./grunt-aws.json');

    var s3 = new aws.S3();

	s3.createBucket({Bucket: bucketName}, function(err) {
		if (err) {
			console.log("Error: "+err);
		} else {
			console.log('created the bucket[' + bucketName + ']');
		}
    });
};

createBucket(bucketName); //call the create bucket function

