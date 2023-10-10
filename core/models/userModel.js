const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			require: [true, 'A user must have an email'],
			unique: true,
		},
		publicKey: {
			type: String,
			unique: true,
		},
		signingKey: {
			type: String,
			unique: true,
		},
		salt: {
			type: String,
			unique: true,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

userSchema.pre('save', (next) => {
	next();
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
