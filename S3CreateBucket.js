
var args = process.argv.slice(2);

var bucketName = args[1];

var createBucket = function (bucketName) {


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

	//command syntax: node S3CreateBucket.js createBucket < bucket name >


};

createBucket(bucketName); //call the create bucket function

