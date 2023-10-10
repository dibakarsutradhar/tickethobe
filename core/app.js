const express = require('express');
const cors = require('cors');

// module exports
const { allowOrigins } = require('./libs/utils/allowOrigins');
const UserRoutes = require('./routes/userRoutes');
const GlobalErrorHandler = require('./libs/utils/globalErrorController');

// init express app
const app = express();

// set cors
app.use(
	cors({
		origin: allowOrigins,
	})
);

app.use(express.json());

app.use('/api/v1/user', UserRoutes);

app.use(GlobalErrorHandler);

module.exports = app;
