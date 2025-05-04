import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

export const writeProducts = async (newProducts) => {
  try {
    const products = JSON.stringify(newProducts, undefined, 2);
    await fs.writeFile(PATH_DB, products, { encoding: 'utf-8' });
  } catch (error) {
    console.error('Помилка при записі продуктів:', error.message);
  }
};
