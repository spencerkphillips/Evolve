const mongoose = require('mongoose');
require('dotenv').config();

const isMongoDbUrl = JSON.parse(
	process.env.IS_MONGODB_CLOUD_URI ? process.env.IS_MONGODB_CLOUD_URI : 'false'
);
const uri = isMongoDbUrl
	? process.env.MONGODB_CLOUD_URI
	: `mongodb://${process.env.MONGO_LOCAL_HOST}:${process.env.MONGO_LOCAL_PORT}/${process.env.MONGO_LOCAL_DB_NAME}`;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
const connectWithDb = async (cb, em) => {
	const connectionResult = await mongoose.connect(uri, options);
	// eslint-disable-next-line no-console
	console.log(
		`Connected to mongoDB on database:
    ${connectionResult.connections[0].name} at ${new Date().toDateString()}`
	);
	if (cb && em) cb(em);
};
module.exports = connectWithDb;
