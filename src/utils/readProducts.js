import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

export const readProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const products = data.trim() ? JSON.parse(data) : [];

    return products;
  } catch (error) {
    console.error('Помилка читання файла:', error.message);
  }
};
