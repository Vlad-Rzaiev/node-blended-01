import { readProducts } from '../utils/readProducts.js';

export const groupProductsByCategories = async () => {
  try {
    const products = await readProducts();

    const groupedProducts = {};

    products.forEach((product) => {
      if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
      }

      groupedProducts[product.category].push(product.name);
    });

    console.log('Згруповані продукти за категоріями:');
    console.log(groupedProducts);

    return groupedProducts;
  } catch (error) {
    console.error('Помилка при читанні продуктів:', error.message);
  }
};

groupProductsByCategories();
