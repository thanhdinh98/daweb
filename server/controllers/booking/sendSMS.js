/* eslint-disable no-unused-vars */
const request = require('request');

async function sendSMS(receiver, content, secret = '5dc05865e4', apiid = '54c78db2-5c7e-43ef-a14e-717a657d1c6f') {
  const endPoint = `https://sms4api.com/api/send/${secret}/${apiid}`;
  const data = {
    type: 0,
    lstSend: [
      {
        content,
        phone: receiver,
      },
    ],
  };
  // eslint-disable-next-line no-unused-expressions
  request.post({
    url: endPoint,
    body: data,
    json: true,
  }, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    console.log(response);
  });
}

module.exports = sendSMS;
