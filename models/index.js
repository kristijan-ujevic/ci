// thanks to the sequelize docs
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('config').database;
let db = {};

var sequelize = new Sequelize(config.database_name, config.user, config.password, config.options);

fs.readdirSync(__dirname).filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;