const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const fullUrl = 'mongodb+srv://abu8lele:abu8lele@work.14nuw.mongodb.net/8200ac?retryWrites=true&w=majority';

let _db;

const initDb = callback => {
    if(_db) {
        return callback(null, _db);
    }

    MongoClient.connect(fullUrl)
        .then(client => {
            _db = client;
            return callback(null, client);
        })
        .catch(err => {
            return callback(err);
        })
}

const getDb = () => {
    if(!_db) {
        throw Error('No Connection Established');
    }
    return _db;
}

module.exports = {
    initDb,
    getDb
}
