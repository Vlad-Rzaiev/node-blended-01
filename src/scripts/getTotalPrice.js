import { readProducts } from '../utils/readProducts.js';

export const getTotalPrice = async () => {
  try {
    const products = await readProducts();

    if (products.length === 0) {
      console.log('Файл з продуктами порожній');
      return 0;
    }

    const totalPrice = products.reduce((acc, product) => {
      const roundedPrice = Math.round(parseFloat(product.price) * 100) / 100;

      return !isNaN(roundedPrice) ? acc + roundedPrice : acc;
    }, 0);

    const roundedTotalPrice = Math.round(totalPrice * 100) / 100;
    console.log(`Загальна вартість продуктів: ${roundedTotalPrice} $`);

    return roundedTotalPrice;
  } catch (error) {
    console.error('Помилка при читанні продуктів:', error);
  }
};

getTotalPrice();
