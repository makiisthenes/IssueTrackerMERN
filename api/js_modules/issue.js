const { UserInputError } = require('apollo-server-express');
const { getDb, getNextAvailableId } = require("./db.js");



async function list(_, { status, ownerSearch, effortMin, effortMax }) {
  const db = getDb();
  const filter = {};
  if (status) {filter.status = status};
  if (ownerSearch) {filter.owner = ownerSearch };
	
  if (effortMin !== undefined || effortMax !== undefined){
	  filter.effort = {};
	  console.log("effortMin", effortMin)
	  console.log("effortMax", effortMax)
	  if (effortMin !== undefined ) filter.effort.$gte = effortMin;
	  if (effortMax !== undefined) filter.effort.$lte = effortMax;
  }
console.log("filter", filter);
  const issues = await db.collection('issues').find(filter).toArray();
  // return issuesDB;
  return issues;
}

async function add(_, { issue }) {
  // Resolver function which includes, (parent, args, context, info)
  const db = getDb();
  validate(issue);
  issue.created = new Date();
  issue.id = await getNextAvailableId('issues');// issue.id = issuesDB.length +1;
  console.log('New ID: ', issue.id);
  const result = await db.collection('issues').insertOne(issue); // issuesDB.push(issue);
  /* Due to the fact the schema also has _id field with ID! type,
  we need to return the same type from db. */
  console.log('Result: ', result);
  const savedIssue = await db.collection('issues').findOne({ id: issue.id, _id: result.insertedId });
  // return issue;  // As shown in schema, must return String of Issue.
  return savedIssue;
}



function validate(issue) {
  const errors = [];
  // Making sure title has min 3 characters.
  if (issue.title.length < 3) {
    errors.push("Field 'title' must be at least 3 characters!");
  }
  // Check if owner value if assigned is selected.
  if (issue.status === 'Assigned' && !issue.owner) {
    errors.push("Field 'owner' must have a value if Assigned is selected as status.");
  }

  if (errors.length > 0) {
    throw new UserInputError('Invalid Input(s)', { errors });
  }
}

async function get(_, { id }){
	const db = getDb();
	const result = await db.collection('issues').findOne({"id": id});
	return result;
}



module.exports = { list, add, get }