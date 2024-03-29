import persistence from '../config/app.config.js';
import enviroment from '../../db/db.js';

let productsDAO;

switch (persistence) {
	case 'memory':
		const { default: MemoryDAO } = await import('./memory/products.memory.js');
		productsDAO = MemoryDAO;
		break;
	case 'mongo':
		enviroment();
		const { default: MongoDAO } = await import('./mongo/products.mongo.js');
		productsDAO = MongoDAO;
		break;
}

export default productsDAO;