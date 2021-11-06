const issuesDB = [
  {
    id: 1, status: 'New', owner: 'Ravan', effort: 5, created: new Date('2019-01-15'), due: undefined, title: 'Error in console when clicking add.',
  },
  {
    id: 2, status: 'Assigned', owner: 'Maki', effort: 14, created: new Date('2019-01-16'), due: new Date('2019-02-20'), title: 'Missing bottom border on panel',
  },
];


require('dotenv').config();
const { MongoClient } = require('mongodb');

const db_url = process.env.DB_URL || 'mongodb://localhost/issuetracker';


function sync_connect() {
  const client = new MongoClient(db_url, { useNewUrlParser: true });
  try {
    client.connect();
    console.log('Database connected', db_url);
  } catch (e) {
    console.log('Database connection failed.');
  }

  // Find location of collection using database connection.
  const db = client.db();
  const issuetracker_collection = db.collection('issuetracker');
  const employeee = { id: 1, name: 'Maki Peres', age: 19 };
  issuetracker_collection.insertOne(employeee, (err, result) => {
    console.log('Result of insert: \n', result.insertedID);
  });

  client.close();
}

async function testWithAsync() {
  console.log('Testing db with async');
  const client = new MongoClient(db_url, { useNewUrlParser: true });
  try {
    await client.connect();
    console.log('Connected to mongodb');
    const db = client.db();
    const collection = db.collection('issuetracker');
    for (i = 0; i < 10; i++) {
    		const result = await collection.insertOne({ randomNumber: Math.floor(Math.random() * 100) + 1 });
      console.log('Result of insert: ', result.insertedId);
      const docs = await collection.find({ _id: result.insertedId }).toArray();
      console.log('Result of find: ', docs);
    }
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

testWithAsync();
