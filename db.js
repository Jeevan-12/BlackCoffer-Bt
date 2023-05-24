const { MongoClient } = require('mongodb');
const con = new MongoClient('mongodb://0.0.0.0:27017');
const connect = async () => {
  const dbConnect = await con.connect();
  const db = await dbConnect.db('energy');
  const collection = await db.collection('source');
  return collection;
};

module.exports = connect;
