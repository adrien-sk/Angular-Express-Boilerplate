const logger = require('../config/logger');
const Foo = require('./../models/foo.model');

// Where to try catch ? In Services ? In controllers ?
const getFoos = async () => {
    const foos = await Foo.findAll();
    return foos;
};

const getFoo = async (id) => {
    const foo = await Foo.findByPk(id);
    return foo;
};

const createFoo = async (body) => {
    const foo = await Foo.create(body);
    return foo;
};

const updateFoo = async (id, body) => {
    if (id != body.id) {
        throw new Error('Bad request');
    }

    const foo = await Foo.findByPk(id);

    if (foo === null) {
        throw new Error('Foo not found');
    }

    return await Foo.update(body, {
        where: {
            id: body.id,
        },
    });
};

const deleteFoo = async (id) => {
    const foo = await Foo.findByPk(id);

    if (foo === null) {
        throw new Error('Foo not found');
    }

    return await Foo.destroy({
        where: {
            id: id,
        },
    });
};

// Delete TODO

module.exports = {
    getFoos,
    getFoo,
    createFoo,
    updateFoo,
    deleteFoo,
};
