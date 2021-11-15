const logger = require('../config/logger');
const fooService = require('./../services/foo.service');

const getFoos = async (req, res, next) => {
    try {
        const foos = await fooService.getFoos();
        res.status(200).send(foos);
    } catch (err) {
        next(err);
    }
};

const getFoo = async (req, res, next) => {
    try {
        const foo = await fooService.getFoo(req.params.id);
        res.status(200).send(foo);
    } catch (err) {
        next(err);
    }
};

const createFoo = async (req, res, next) => {
    try {
        const foo = await fooService.createFoo(req.body);
        res.status(201).send(foo);
    } catch (err) {
        next(err);
    }
};

const updateFoo = async (req, res, next) => {
    try {
        const numberOfFooUpdated = await fooService.updateFoo(
            req.params.id,
            req.body
        );
        res.status(200).send();
    } catch (err) {
        next(err);
    }
};

const deleteFoo = async (req, res, next) => {
    try {
        const numberOfFooDeleted = await fooService.deleteFoo(req.params.id);
        res.status(200).send();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getFoos,
    getFoo,
    createFoo,
    updateFoo,
    deleteFoo,
};
