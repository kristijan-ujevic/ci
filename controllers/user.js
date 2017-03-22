"use strict";

const express = require('express');
const UserController = express.Router();
var userRepo = require('../repository/user');

UserController.get('/', function (req, res, next) {
    userRepo.getAll()
        .then(function (data) {
            res.json(data);
        })
        .catch(console.error)
})

UserController.post('/', function (req, res, next) {
    userRepo.create(req.body)
        .then(function (data) {
            res.json(data);
        })
        .catch(console.error)
})

module.exports = UserController;