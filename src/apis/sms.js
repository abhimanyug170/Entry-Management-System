const express=require('express');
const Nexmo = require('nexmo');

let msg=function sendSms(hostPhone,hostName,visitorName,visitorPhone,visitorEmail){

    const nexmo = new Nexmo({
      apiKey: process.env.NEXMO_API_KEY,
      apiSecret: process.env.NEXMO_API_SECRET
    });
  
    const from = 'Nexmo';
    const msgNumber='91'+hostPhone;
    const msg=`Hey ${hostName}, you have a new visitor. His/her details are as follows:\n 1. Name:${visitorName} \n 2. Phone:${visitorPhone} \n 3. Email:${visitorEmail}`;

    nexmo.message.sendSms(from, msgNumber, msg);
}
module.exports=msg;