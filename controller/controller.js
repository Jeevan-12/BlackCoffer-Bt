const connect = require('../db');

const getdata = async (req, resp) => {
  try {
    db = await connect();
    const data = await db.find({}).toArray();
    resp.status(200).json({ messsage: 'datasend', data });
  } catch (e) {
    resp.status(400).json({ messsage: 'error' });
  }
};
const getinsert = async (req, resp) => {
  try {
    db = await connect();
    const data = await db.find({}).toArray();

    resp.status(200).json({ messsage: 'datasend', data });
  } catch (e) {
    resp.status(400).json({ messsage: 'error' });
  }
};
module.exports = { getdata, getinsert };
