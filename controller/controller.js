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

// const getinsert = async (req, resp) => {
//   try {
//     db = await connect();
//     const data = await db.find({}).toArray();

//     resp.status(200).json({ messsage: 'datasend', data });
//   } catch (e) {
//     resp.status(400).json({ messsage: 'error' });
//     npm;
//   }
// };

const test = async (req, res) => {
  await within(getinsert, res, 7000);
};

async function within(fn, res, duration) {
  const id = setTimeout(
    () =>
      res.json({
        message: 'There was an error with the upstream service!',
      }),
    duration
  );

  try {
    let data = await fn();
    clearTimeout(id);
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

async function getinsert() {
  try {
    db = await connect();
    const data = await db.find({}).toArray();
    resp.status(200).json({ messsage: 'datasend', data });
  } catch (e) {
    resp.status(400).json({ messsage: 'error' });
  }
}

module.exports = { getdata, getinsert, test };
