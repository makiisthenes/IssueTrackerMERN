// Initialisation Schema and Indexing, also adding 2 rows.
/* global db */
/* eslint no-restricted-globals: "off" */
db.issues.remove({});

const issuesDB = [
  {
    id: 1,
	  status: 'New',
	  owner: 'Ravan',
	  effort: 5,
	  created: new Date('2019-01-15'),
	  due: undefined,
	  title: 'Error in console when clicking add.',
  },
  {
	  id: 2,
	  status: 'Assigned',
	  owner: 'Maki',
	  effort: 14,
	  created: new Date('2019-01-16'),
	  due: new Date('2019-02-20'),
	  title: 'Missing bottom border on panel',
  },
];

db.issues.insertMany(issuesDB);
const count = db.issues.count();

db.counters.remove({ _id: 'issues' }); // doesnt exsist the first time round
db.counters.insert({ _id: 'issues', current: count });
db.issues.createIndex({ id: 1 }, { unique: true });
db.issues.createIndex({ status: 1 });
db.issues.createIndex({ owner: 1 });
db.issues.createIndex({ created: 1 });


// initialise this using command prompt.
// mongo issuetracker scripts/init.mongo.js
