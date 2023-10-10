const CryptoJs = require('crypto-js');

const encryptWithAES = (signingkey, salt) => {
	return CryptoJs.AES.encrypt(signingkey, salt).toString();
};

module.exports = encryptWithAES;
