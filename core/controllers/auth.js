const User = require('../models/userModel');
const catchAsync = require('../libs/utils/catchAsync');
const { v4: uuid } = require('uuid');
const encryptWithAES = require('../libs/encrypt/encrypt');

exports.login = catchAsync(async (req, res, next) => {
	// If there is no email in the payload
	if (!req.body.email) {
		res.status(404).json({
			message: 'Email not found!',
		});
		return;
	}

	// check if the user email exists in DB
	const user = await User.findOne({ email: req.body.email });

	// If the user doesn't exist then create user
	if (!user) {
		// create wallet

		// create a salt
		const salt = uuid();

		// encrypt user signingkey
		const encryptedSigningKey = encryptWithAES('signingkey', salt);

		const newUser = await User.create({
			...req.body,
			publicKey: 'wallet1.address',
			signingKey: encryptedSigningKey,
			salt: salt,
		});

		res.status(201).json({
			message: 'success',
			data: {
				email: newUser.email,
				wallet_address: newUser.publicKey,
				balance: 0,
			},
		});
	}
});
