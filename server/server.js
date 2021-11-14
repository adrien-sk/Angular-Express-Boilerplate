const app = require('./config/express');
const variables = require('./config/variables');
const logger = require('./config/logger');
const db = require('./config/database');

const server = app.listen(variables.port, () => {
    logger.info('Server listening on ' + variables.port);
});
