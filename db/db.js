import mongoose from 'mongoose';
import config from '../src/config/enviroment.config.js';
import logger from '../src/utils/logger.util.js';

const mongoUrl = config.MONGO_URL;

const enviroment = async () => {
	try {
		await mongoose.connect(mongoUrl, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		logger.info('Mongo connected');
	} catch (err) {
		logger.error(`Mongo error: ${err}`);
	}
};

export default enviroment;