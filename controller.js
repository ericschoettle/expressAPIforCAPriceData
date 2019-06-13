let express = require('express');
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
// const dynamoDB = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const docClient = new AWS.DynamoDB.DocumentClient();

let controllers = {
  nodeAndTime: (req, res) => { //  /node/LAPLMG1_7_B2/time/2016
    const node = req.params.node;
    // TODO: improve logic on time - use moment to parse dates, etc. 
    const time = req.params.time;
    const params = {
      TableName: 'CA-Hours-DAM-LMP',
      KeyConditionExpression: "nodeId = :n",
      // KeyConditionExpression: "nodeId = :n  and begins_with(startTimeGMT, :t)",
      ExpressionAttributeValues: {
          ":n": node
      }
    }
    docClient.query(params, function(err, data) {
      if (err) {console.log(err, err.stack);} // an error occurred
      else {
        res.send(data)
      } 
    }); 
  }
}
module.exports = controllers