const CryptoJs = require('crypto-js');

const decryptWithAES = (signingkey, salt) => {
	return CryptoJs.AES.decrypt(signingkey, salt).toString(CryptoJs.enc.Utf8);
};

module.exports = decryptWithAES;
