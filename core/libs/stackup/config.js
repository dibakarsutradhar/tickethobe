require('dotenv').config();

const STACKUP_API = process.env.STACKUP_API;
const ENTRYPOINT = process.env.AA_ENTRYPOINT;

const stackupConfig = {
	rpcUrl: `https://api.stackup.sh/v1/node/${STACKUP_API}`,
	entryPoint: `${ENTRYPOINT}`,
	paymaster: {
		rpcUrl: `https://api.stackup.sh/v1/paymaster/${STACKUP_API}`,
		context: {},
	},
};

module.exports = stackupConfig;
