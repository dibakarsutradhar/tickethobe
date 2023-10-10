const express = require('express');
const cors = require('cors');
const { allowOrigins } = require('./libs/utils/allowOrigins');

// init express app
const app = express();

// set cors
app.use(
	cors({
		origin: allowOrigins,
	})
);

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello Test!');
});

module.exports = app;
