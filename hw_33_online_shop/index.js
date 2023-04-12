import { getAllProducts, publishProducts, editProducts, closeDescription } from "./js/helpers.js";

let productsContainer = document.querySelector('#productsContainer');
let descrContainer = document.querySelector('#descrContainer');
let newProdBtn = document.querySelector('#new-product-btn');

document.addEventListener('DOMContentLoaded', async () => {
    let products = await getAllProducts();
    console.log(products);
    
    publishProducts(products, productsContainer, descrContainer);

    productsContainer.addEventListener('click', (e) => {
        closeDescription(e, descrContainer);
    })
    
    newProdBtn.addEventListener('click', () => {
        editProducts(null, products, productsContainer, descrContainer);    
    })
    
})






