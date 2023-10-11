const { ethers } = require('ethers');
const stackupConfig = require('../../libs/stackup/config');

const getBalance = async (address) => {
	let totalBalance = {};

	const provider = new ethers.providers.JsonRpcProvider(stackupConfig.rpcUrl);
	const ethBalance = await provider.getBalance(address);

	totalBalance['eth'] = {
		balance: ethers.utils.formatEther(ethBalance),
		symbol: 'ETH',
	};

	return totalBalance;
};

module.exports = getBalance;
