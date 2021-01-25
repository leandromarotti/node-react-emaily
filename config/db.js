const mongoose = require('mongoose');
const keys = require('./keys');

const connectDB = async () => {
	try {
		await mongoose.connect(keys.mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});

		console.log('MongoDB connected...');
	} catch (err) {
		console.log(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;