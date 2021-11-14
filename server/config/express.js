const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./../routes/v1');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/v1', routes);

module.exports = app;
