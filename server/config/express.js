const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./../routes/v1');
const errorHandler = require('./../middlewares/error');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/v1', routes);

app.use((req, res) => {
    res.status(404).json({
        error: 'Not found',
    });
});

app.use(errorHandler);

module.exports = app;
