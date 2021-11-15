const express = require('express');
const fooController = require('./../../controllers/foo.controller');

const router = express.Router();

router
    .route('/')
    .get((req, res, next) => {
        fooController.getFoos(req, res, next);
    })
    .post((req, res, next) => {
        fooController.createFoo(req, res, next);
    });

router
    .route('/:id')
    .get((req, res, next) => {
        fooController.getFoo(req, res, next);
    })
    .patch((req, res, next) => {
        fooController.updateFoo(req, res, next);
    })
    .delete((req, res, next) => {
        fooController.deleteFoo(req, res, next);
    });

module.exports = router;
