const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017/party_manager';

module.exports = async () => {
    const db = await MongoClient.connect(MONGO_URL);

    return {
        Allocations: db.collection('allocations')
    };
};
