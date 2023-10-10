require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const SECRETKEY = process.env.MONGODB_SECRETKEY;
const USERNAME = process.env.MONGODB_USERNAME;

mongoose
	.connect(
		`mongodb+srv://${USERNAME}:${SECRETKEY}@${USERNAME}.e44hkds.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => console.log('Successfullt connected to the DB!'))
	.catch((err) => console.log('Cannot connect to the DB!'));

const port = 3000;

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
