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
	array.map(ele => console.log(`${ele.product} sells for \$${ele.price}`));
};

listProducts(createProducts());
