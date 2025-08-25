document.addEventListener("DOMContentLoaded", () => {
  const productsList = document.querySelector(".products");

  // Using a free dummy API for fake products
  fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(products => {
      productsList.innerHTML = products
        .map(
          (prod) => `
        <div class='qaqa'>
          <div class="kj">
            <button class="km">
              <svg class="heart" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" 
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
          <div class="imgn">
            <img src="${prod.image}" />
          </div>
          <h4>${prod.title}</h4>
          <p>Price: $${prod.price}</p>
          <p class="pp">${prod.description}</p>
<p>Rating: ${prod.rating.rate} ⭐ (${prod.rating.count} reviews)</p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
        `
        )
        .join("");
        
        const btns = document.querySelectorAll(".km");
        btns.forEach(btn => {
          btn.addEventListener("click", () => {
            btn.classList.toggle("liked");
          });
        });
     
    });
    });
    