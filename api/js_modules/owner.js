const { getDb } = require("./db.js");

// Resolver function for obtaining owner list from mongodb.
async function get(){
	const db = getDb();
	const result = await db.collection("issues").distinct("owner");
	if (result) return result;
	return [];
}

module.exports = { get }