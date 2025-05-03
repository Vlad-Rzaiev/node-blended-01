import { readProducts } from '../utils/readFile.js';
import { writeProducts } from '../utils/writeFile.js';

export const modifyProducts = async () => {
  try {
    const products = await readProducts();

    if (products.length === 0) {
      console.log('Файл з продуктами порожній');
      return [];
    }

    const modifiedProducts = products.map(({ description, ...data }) => data);

    await writeProducts(modifiedProducts);
    console.log('Продукти успішно оновлені: поле "description" видалено.');
    return modifiedProducts;
  } catch (error) {
    console.error('Помилка при читанні продуктів:', error.message);
  }
};

modifyProducts();
