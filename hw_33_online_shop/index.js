import {
  getAllProducts,
  publishProducts,
  editAddProducts,
  closeDescription,
} from './js/helpers.js';

let productsContainer = document.querySelector('#productsContainer');
let descrContainer = document.querySelector('#descrContainer');
let newProdBtn = document.querySelector('#new-product-btn');

document.addEventListener('DOMContentLoaded', async () => {
  let products = await getAllProducts();

  publishProducts(products, productsContainer, descrContainer);

  productsContainer.addEventListener('click', e => {
    closeDescription(e, descrContainer);
  });

  newProdBtn.addEventListener('click', () => {
    editAddProducts(null, products, productsContainer, descrContainer);
  });
});
