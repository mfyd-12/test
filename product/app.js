// app.js
document.addEventListener("DOMContentLoaded", () => {
const productsList = document.querySelector(".products");
  
// Using a free dummy API for fake products
  fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(products => {
      productsList.innerHTML = products.map(prod => `
        <div class='qaqa'>
          <img src="${prod.image}" />
            <h4>${prod.title}</h4>
            <p>${prod.description}</p>
            <p>Price: $${prod.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>
        `)
    
    })
 
});