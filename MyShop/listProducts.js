const faker = require("faker");
function createProducts() {
	const products = [];
	for (let i = 0; i < 10; i++) {
		products.push({
			product: faker.commerce.productName(),
			price: faker.commerce.price()
		});
	}
	return products;
}

const listProducts = array => {
	console.log("=====================");
	console.log("Welcome to the Store!");
	console.log("=====================");
	array.map(ele => console.log(`${ele.product} - $${ele.price}`));
};

listProducts(createProducts());
