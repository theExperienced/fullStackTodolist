const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const fullUrl = process.env.MONGO_URL || 'mongodb+srv://abu8lele:abu8lele@work.14nuw.mongodb.net/8200ac?retryWrites=true&w=majority';

let _db;

const initDb = callback => {
    if(_db) {
        return callback(null, _db);
    }
    console.log('before inidDb');
    MongoClient.connect(fullUrl)
        .then(client => {
            _db = client;
            console.log('clienting');
            return callback(null, client);
        })
        .catch(err => {
            console.log(err);
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
