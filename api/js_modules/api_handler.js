const { ApolloServer } = require('apollo-server-express'); // Used for everything graphql, and graphql playground.
const fs = require('fs'); // Deals with file handling, opening and closing of files.
const issue = require("./issue.js");
const about = require("./about.js");
const owner = require("./owner.js");
const GraphQLDate = require("./graphql_date.js");
const path = require("path");




// GraphQL Resolver and Functions
const resolvers = {
  Query: {
    about: about.getMessage,
    issueList: issue.list,
	issue: issue.get,
	ownerList: owner.get,
  },
  Mutation: {
    setAboutMessage: about.setMessage,
    issueAdd: issue.add,
  },
  GraphQLDate,
};


function installHandler(app){
	const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
	// Initiate Graphql ApolloServer and middleware to listen to path /graphql.
	const schema_file_path = path.join(__dirname + "/../schema.graphql");
	const server = new ApolloServer({
  	typeDefs: fs.readFileSync(schema_file_path, 'utf-8'),
  	resolvers,
  	formatError: (error) => { console.log(error); return error; },
	});
	server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}

module.exports = { installHandler }