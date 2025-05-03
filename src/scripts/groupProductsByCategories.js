import { readProducts } from '../utils/readFile.js';

export const groupProductsByCategories = async () => {
  try {
    const products = await readProducts();
  } catch (error) {
    console.error('Помилка при читанні продуктів:', error.message);
  }
};
