var db = require('../models');

let UserRepository = {};


UserRepository.getAll = function () {
    return db.user.findAll({})
}


UserRepository.create = function (user) {
    console.log(user);
    return db.user.create({
        first_name: user.first_name,
        last_name: user.last_name,
    }).then(newUser => {
        return newUser;
    });
}

module.exports = UserRepository;