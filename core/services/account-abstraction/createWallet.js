const { ethers } = require('ethers');
const { Presets } = require('userop');
const stackupConfig = require('../../libs/stackup/config');

const createWallet = async () => {
	const signingkey = new ethers.Wallet(ethers.utils.randomBytes(32)).privateKey;
	const stackup = await Presets.Builder.SimpleAccount.init(
		new ethers.Wallet(signingkey),
		stackupConfig.rpcUrl
	);

	const address = stackup.getSender();
	return { address, signingkey };
};

module.exports = createWallet;
