var config = module.exports = {};

config.env = 'development';

//mongo database
config.mongo = {};
config.mongo.uri = process.env.MONGO_URI || 'localhost';
config.mongo.db = 'mongodb://localhost:3000/casla_dev';
