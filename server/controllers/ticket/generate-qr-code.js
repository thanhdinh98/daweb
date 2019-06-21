const QACode = require('qrcode');

const generateQRCode = async (text) => {
  const qrCode = await QACode.toDataURL(text);
  return qrCode;
};

module.exports = { generateQRCode };
