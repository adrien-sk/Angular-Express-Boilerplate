const logger = require('../config/logger');
const Foo = require('./../models/foo.model');

// Where to try catch ? In Services ? In controllers ?
const getFoos = async () => {
    const foos = await Foo.findAll();
    return foos;
};

const getFoo = async (id) => {
    const foo = await Foo.findByPk(id);
    //Should a Not Found return else than 200 ?
    return foo;
};

const createFoo = async (body) => {
    try {
        // Parse correctly body values
        const foo = await Foo.create(body);
        return foo;
    } catch (err) {
        logger.error(err);
    }
};

// Update TODO

// Delete TODO

module.exports = {
    getFoos,
    getFoo,
    createFoo,
};
