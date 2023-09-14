const {
	randProductName,
	randProductDescription,
	randClothingSize,
	randPastDate,
	randRecentDate,
	randNumber,
} = require('@ngneat/falso');
const { save } = require('../src/core/repository');
const { slugify } = require('voca');
const { name: ModelName } = require('../src/modules/product/model');

const getFakeUniqueProductName = () => randProductName();
const getFakeUniqueProductPrice = () => randNumber({ min: 0.99, max: 1000 });

const getFakeProduct = () => ({
	name: getFakeUniqueProductName,
	sku: slugify(getFakeUniqueProductName),
	cost: parseInt(getFakeUniqueProductPrice, 10),
	price: parseFloat(getFakeUniqueProductPrice),
	description: randProductDescription(),
	manufacturingDate: randPastDate({ years: 5 }),
	expiryDate: randRecentDate({ days: 40 }),
	size: randClothingSize(),
	createdAt: randPastDate(),
	updatedAt: randRecentDate(),
});

const seed = async (logger) => {
	const products = [];
	logger.info(`Seeding products`);
	for (let i = 0; i < 1000; i++) {
		const product = getFakeProduct();
		products.push(product);
	}

	await Promise.all(
		products.map(async (product) => {
			const savedProduct = await save(product, ModelName);
			logger.info(`Saved product id: ${savedProduct._id}`);
		})
	);
	logger.info('Seeding products completed');
};

module.exports = { seed };
