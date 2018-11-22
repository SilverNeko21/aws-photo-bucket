'use strict';

const AWS = require('aws-sdk')
const s3 = new AWS.S3();

module.exports.list = (event, context, callback) => {
  const params = {
    Bucket: "treasure-chest-capstone",
    MaxKeys: 4
  };
  s3.listObjectsV2(params, function(err, data) {
    if (err) console.log(err, err.stack); 
    console.log('data', data);
   
    const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      message: data,
    })
  };
  callback(null, response)
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
  })
};
  
