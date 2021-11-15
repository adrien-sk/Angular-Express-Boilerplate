const logger = require('../config/logger');

const errorHandler = (err, req, res, next) => {
    logger.error(err.type + ' : ' + err.message);
    res.status(500).json('An error occured');
};

module.exports = errorHandler;
