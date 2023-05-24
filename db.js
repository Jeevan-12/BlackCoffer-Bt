const { MongoClient } = require('mongodb');
const con = new MongoClient(
  'mongodb+srv://root:root@cluster0.vwjv8cn.mongodb.net/'
);
const connect = async () => {
  const dbConnect = await con.connect();
  const db = await dbConnect.db('energy');
  const collection = await db.collection('source');
  return collection;
};

module.exports = connect;
