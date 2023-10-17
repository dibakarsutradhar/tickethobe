require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: {
		compilers: [
			{
				version: '0.8.3',
			},
			{
				version: '0.8.20',
			},
		],
	},
	networks: {
		scrollSepolia: {
			url: 'https://sepolia-rpc.scroll.io/' || '',
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
		},
	},
	etherscan: {
		apiKey: {
			scrollSepolia: '',
		},
		customChains: [
			{
				network: 'scrollSepolia',
				chainId: 534351,
				urls: {
					apiURL: `https://sepolia-blockscout.scroll.io/api`,
					browserURL: 'https://sepolia-blockscout.scroll.io/',
				},
			},
		],
	},
};
