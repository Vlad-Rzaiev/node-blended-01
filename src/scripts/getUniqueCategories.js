import { readProducts } from '../utils/readFile.js';

export const getUniqueCategories = async () => {
  try {
    const products = await readProducts();

    if (products.length === 0) {
      console.log('Файл з продуктами порожній');
      return 0;
    }

    const uniqueCategories = [];

    for (const product of products) {
      if (!uniqueCategories.includes(product.category)) {
        uniqueCategories.push(product.category);
      }
    }

    console.log(`Знайдено ${uniqueCategories.length} категорій`);
    console.table(uniqueCategories);
    return uniqueCategories;
  } catch (error) {
    console.error('Помилка при читанні продуктів:', error);
  }
};

getUniqueCategories();
