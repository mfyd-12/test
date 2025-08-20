// app.js
document.addEventListener("DOMContentLoaded", () => {
  const productsList = document.querySelector(".products-list");

  // Using a free dummy API for fake products
  fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(products => {
      productsList.innerHTML = products.map(prod => `
        <div class='product'>
          <img src="${prod.image}" />
            <h2>${prod.title}</h2>
            <p>${prod.description}</p>
            <p>Price: $${prod.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>
        `)
    
    })
 
});