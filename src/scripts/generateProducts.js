import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readFile.js';
import { writeProducts } from '../utils/writeFile.js';

export const generateProducts = async (num) => {
  try {
    const products = await readProducts();

    for (let i = 0; i < num; i++) {
      products.push(createFakeProduct());
    }

    await writeProducts(products);
    console.log('Продукти успішно додані.');
    return products;
  } catch (error) {
    console.error('Помилка при додаванні файлів:', error.message);
  }
};

generateProducts(5);
