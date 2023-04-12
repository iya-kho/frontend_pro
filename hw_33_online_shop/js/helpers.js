export const Helpers = {

    async getData(request) {

        let data;

        try {
            let response = request;
            data = await response.json();
        
            if (!response.ok) {
                throw new Error(`${data.error}: ${data.message}`);
        
            }
        } catch (error) {
            console.log(error);
        }

        return data;
    },

    async getAllProducts() {

        let products = getData(await fetch (`https://api.escuelajs.co/api/v1/products?offset=0&limit=10`));

        return products;
    },

    async createNewProduct(newProduct) {

        let updatedProduct = getData(
            await fetch (`https://api.escuelajs.co/api/v1/products/`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(newProduct)
                }
        ))

        return updatedProduct;
    },

    async updateProduct(oldProduct, newProduct) {
        
        let updatedProduct = getData(
            await fetch (`https://api.escuelajs.co/api/v1/products/${oldProduct.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(newProduct)
                }
        ))

        return updatedProduct;
    },

   
    publishProducts(products, globalContainer, descrContainer) {
        
        products.forEach((product) => {

            let productContainer = document.createElement('div');
            productContainer.classList.add('product-container', 'col-md-6', 'col-lg-4', 'col-xl-3');
            globalContainer.appendChild(productContainer);
            productContainer.innerHTML +=
                `<div class="card text-center card-product">
                <div class="card-product__img">
                    <img class="card-img" src="${product.images[0]}" alt="${product.title}">
                    <ul class="card-product__imgOverlay">
                        <li><button class="my-btn btn-more"><i class="ti-more"></i></button></li>
                        <li><button><i class="my-btn ti-shopping-cart"></i></button></li>
                        <li><button class="my-btn btn-edit"><i class="ti-pencil"></i></button></li>
                    </ul>
                </div>
                <div class="card-body">
                    <h4 class="card-product__title">${[product.title]}</h4>
                    <p class="card-product__price">$${product.price}</p>
                    <p class="descr my-invisible">${product.description}</p>
                    </div>
                    </div>`;

            addCardBtnListeners(productContainer, product, globalContainer, descrContainer, products);

        });
              
    },
            

    makeVisible(element) {
        element.classList.remove('my-invisible');
    },

    makeInvisible(element) {
        element.classList.add('my-invisible');
    },

    showForm(window, product) {

        window.document.write(
            `<html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Online shop</title>
                    <link rel="stylesheet" href="vendors/bootstrap/bootstrap.min.css">
                    <link rel="stylesheet" href="vendors/themify-icons/themify-icons.css">
                    <link rel="stylesheet" href="css/style.css">
                    <link rel="stylesheet" href="css/mystyle.css">
                </head>
                <body>
                    <div id="form-container">
                        <h4>Fill in information about the product:</h4>
                        <form action="#" id="product-form">
                            <div class="form-group">
                            <label for="form-title">Title:</label> 
                            ${product ?
                            `<input type="text" class="form-control" name="title" value="${product.title}"  required>` : 
                            `<input type="text" class="form-control" name="title" value="" required>`}
                            </div>
                            <div class="form-group">
                            <label for="form-price">Price ($):</label>
                            ${product ?
                            `<input type="text" class="form-control" name="price" value="${product.price}" required>` :
                            `<input type="text" class="form-control" name="price" value="" required>`}
                            </div>
                            <div class="form-group">
                            <label for="form-description">Description:</label>
                            ${product ?
                            `<input type="text" class="form-control" name="description" value="${product.description}" required>` :
                            `<input type="text" class="form-control" name="description" value=""> required`}
                            </div>
                            <div class="form-group">
                            <label for="form-categoryID">Category ID:</label>
                            ${product ?
                            `<input type="text" class="form-control" name="categoryID" value="${product.category.id}" required>` :
                            `<input type="text" class="form-control" name="categoryID" value=""> required`}
                            </div>
                            <div class="form-group">
                            <label for="form-img">Image (URL):</label>
                            ${product ?
                            `<input type="text" class="form-control" name="images" value="${product.images[0]}" required>` :
                            `<input type="text" class="form-control" name="images" value="">`}
                            </div>
                            <button type="submit" class="button button-hero" id="form-btn">Submit</button>
                        </form>
                    </div>
                </body>
            </html>`
        );
    }, 

    editProducts(product, products, globalContainer, descrContainer) {

        let formWin = window.open("about:blank", "form", "popup");
        showForm(formWin, product);

        formWin.addEventListener('submit', async (e) => {
            e.preventDefault();
            let form = e.target;

            let newProductData = {
                title: form.title.value,
                price: form.price.value,
                description: form.description.value,
                categoryId: form.categoryID.value,
                images: [form.images.value]
            }

            let newProduct;

            if (!product) {
                newProduct = await createNewProduct(newProductData);
                products.push(newProduct);
            } else {
                let index = products.indexOf(product);
                newProduct = await updateProduct(product, newProductData);
                products[index] = newProduct;
            }

            formWin.close();
          
            globalContainer.innerHTML = '';
            publishProducts(products, globalContainer, descrContainer);

        })

        
    },

    addCardBtnListeners(itemContainer, product, globalContainer, descrContainer, products) {

        let descrBtn = itemContainer.querySelector('.btn-more');
        let editBtn = itemContainer.querySelector('.btn-edit');

        descrBtn.addEventListener('click', () => {
            descrContainer.innerHTML = itemContainer.innerHTML;
            let cardDetails = descrContainer.querySelector('.card');
            let descr = descrContainer.querySelector('.descr');
            makeVisible(descrContainer);
            makeVisible(descr);
            cardDetails.classList.add('my-fixed');
        })


        editBtn.addEventListener('click', () => editProducts(product, products, globalContainer, descrContainer));
    }, 

    closeDescription (event, container) {
        let target = event.target;

        if (target.tagName === 'BUTTON' || target.tagName === 'I') {
            return false;
        }

        makeInvisible(container);
    }

}

export const { getData, getAllProducts, createNewProduct, updateProduct, publishProducts, makeVisible, makeInvisible,
    showForm, editProducts, addCardBtnListeners, closeDescription } = Helpers;

