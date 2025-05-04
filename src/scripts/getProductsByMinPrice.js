import { pluralize } from '../utils/pluralize.js';
import { readProducts } from '../utils/readProducts.js';

export const getProductsByMinPrice = async (price) => {
  try {
    const products = await readProducts();

    if (products.length === 0) {
      console.log('Файл з продуктами порожній');
      return [];
    }

    const filteredProducts = products.filter(
      (product) => parseFloat(product.price) >= price,
    );

    if (filteredProducts.length > 0) {
      const productForm = pluralize(
        filteredProducts.length,
        'продукт',
        'продукти',
        'продуктів',
      );
      console.log(
        `Знайдено ${filteredProducts.length} ${productForm} з ціною від ${price} $:`,
      );
      console.table(filteredProducts);
    } else {
      console.log('Не знайдено продуктів, які відповідають параметрам пошуку.');
    }

    return filteredProducts;
  } catch (error) {
    console.error('Помилка при читанні продуктів:', error);
  }
};

getProductsByMinPrice(1);
