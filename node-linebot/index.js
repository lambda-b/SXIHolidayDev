'use strict';
 const line = require('@line/bot-sdk');
 const crypto = require('crypto');
 const client = new line.Client({channelAccessToken: process.env.ACCESSTOKEN});

 exports.handler = async event => {
  let signature = crypto.createHmac('sha256', process.env.CHANNELSECRET).update(event.body).digest('base64');
  console.log("event.headers> ", event.headers)
  const headerSignatureKey = 'x-line-signature';
  let checkHeader = (event.headers || {})[headerSignatureKey];
  let body = JSON.parse(event.body);
  console.log("signature> ",signature);
  console.log("checkHeader> ", checkHeader);
  if (signature === checkHeader) {
   if (body.events[0].replyToken === '00000000000000000000000000000000') { //接続確認エラー回避
    const lambdaResponse = {
     statusCode: 200,
     headers: { "X-Line-Status" : "OK"},
     body: '{"result":"connect check"}'
    };
    context.succeed(lambdaResponse);
   } else {
    // let text = body.events[0].message.text;
    const text = "うんこ";
    const message = {
     'type': 'text',
     'text': text
    };
    client.replyMessage(body.events[0].replyToken, message)
    .then((response) => { 
     let lambdaResponse = {
      statusCode: 200,
      headers: { "X-Line-Status" : "OK"},
      body: '{"result":"completed"}'
     };
     context.succeed(lambdaResponse);
    }).catch((err) => console.log(err));
   }
  }else{
   console.log('署名認証エラー');
  }
 };