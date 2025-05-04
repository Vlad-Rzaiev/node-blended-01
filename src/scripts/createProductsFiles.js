import path from 'node:path';
import * as fs from 'node:fs/promises';
import { PATH_FILES_DIR } from '../constans/products.js';
import { readProducts } from '../utils/readProducts.js';

export const createProductsFiles = async () => {
  try {
    const products = await readProducts();

    await fs.mkdir(PATH_FILES_DIR, { recursive: true });

    const createFiles = products.map((product) => {
      const fileName =
        product.name
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '') + '.json';

      const filePath = path.join(PATH_FILES_DIR, fileName);

      return fs.writeFile(filePath, JSON.stringify(product, undefined, 2), {
        encoding: 'utf-8',
      });
    });

    await Promise.all(createFiles);

    console.log('Файли успішно створені!');
  } catch (error) {
    console.error('Помилка при створенні файлів:', error.message);
  }
};

createProductsFiles();
