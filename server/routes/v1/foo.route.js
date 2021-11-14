const express = require('express');
const fooController = require('./../../controllers/foo.controller');

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        fooController.getFoos(req, res);
    })
    .post((req, res) => {
        fooController.createFoo(req, res);
    });

router
    .route('/:id')
    .get((req, res) => {
        fooController.getFoo(req, res);
    })
    .patch((req, res) => {
        fooController.updateFoo(req, res);
    })
    .delete((req, res) => {
        fooController.deleteFoo(req, res);
    });

module.exports = router;
