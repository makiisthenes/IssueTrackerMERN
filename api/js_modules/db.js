require('dotenv').config({ path: 'process.env' });
const { MongoClient } = require('mongodb'); // library for connecting to mongodb database.

let db;

async function connectToDb() {
  const dbUrl = process.env.DB_URL || 'mongodb://localhost/issuetracker';
  const dbClient = new MongoClient(dbUrl, { useNewUrlParser: true });
  // Connecting to Database
  await dbClient.connect();
  console.log('Connected to MongoDB database @', dbUrl);
  db = dbClient.db();
}

async function getNextAvailableId(name) {
  const result = await db.collection('counters').findOneAndUpdate(
    { _id: name },
    { $inc: { current: 1 } },
    { returnOriginal: false },
  );
  return result.value.current;
}

function getDb(){
	return db
}

module.exports = { connectToDb, getNextAvailableId, getDb }