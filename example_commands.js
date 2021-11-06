db.getCollection('issues').find({})



/* Get distinct unique attribute value. */

/* All unique owners */
db.getCollection('issues').distinct("owner")

/* All unique effort levels */
db.getCollection('issues').distinct("effort")