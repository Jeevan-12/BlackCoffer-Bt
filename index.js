const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());
const connect = require('./db');
connect();
const source = require('./routes/source');
app.use('/', source);

// app.post('/post', async (req, resp) => {
//   try {
//     data = req.body;

//     const connect = await con.connect();
//     const db = await connect.db('energy');
//     const collection = await db.collection('source');
//     const insert = await collection.insertOne(data);
//     resp.status(200).json();
//   } catch (e) {
//     resp.status(400).json('error');
//   }
// });

// app.get('/get', async (req, resp) => {
//   try {
//     const connect = await con.connect();
//     const db = await connect.db('energy');
//     const collection = await db.collection('source');
//     const insert = await collection.find().toArray();
//     console.log(insert);
//   } catch (e) {
//     resp.status(200).json('error');
//   }
// });
app.listen(8000, () => {
  console.log('backend');
});
