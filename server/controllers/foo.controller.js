const logger = require('../config/logger');
const fooService = require('./../services/foo.service');

const getFoos = async (req, res) => {
    const foos = await fooService.getFoos();
    res.status(200).send(foos);
};

const getFoo = async (req, res) => {
    const foo = await fooService.getFoo(req.params.id);
    res.status(200).send(foo);
};

const createFoo = async (req, res) => {
    const foo = await fooService.createFoo(req.body);
    res.status(201).send(foo);
};

// Update TODO

// Delete TODO

module.exports = {
    getFoos,
    getFoo,
    createFoo,
};
