const sequelize = require('sequelize');
const variables = require('./variables');
const logger = require('./logger');

// SQLite InMemory
const db = new sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
});

// Persistent Database
/*const db = new Sequelize(
    variables.database.dbName,
    variables.database.dbUser,
    variables.database.dbPassword,
    {
        dialect: variables.database.dbDialect,
        host: variables.database.dbHost,
    }
);*/

module.exports = db;

//  Load models for DB tables update
const bar = require('./../models/bar.model');
const foo = require('./../models/foo.model');

/*  Tables relations examples
One to one
    Foo.hasOne(Bar);
    Bar.belongsTo(Foo);

One to many
    Team.hasMany(Player);
    Player.belongsTo(Team);

Many to many
    Movie.belongsToMany(Actor, { through: 'ActorMovies' });
    Actor.belongsToMany(Movie, { through: 'ActorMovies' }); */

//Database synchronization
db.sync().then(() => logger.info('Database is ready'));
