// Show Cart that is hidden on the right side of the page

(function() {
    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById("cart");

    cartInfo.addEventListener("click", function() {
        cart.classList.toggle("show-cart");
    });
})();

// Add item to the Cart
(function() {
    const cartBtn = document.querySelectorAll(".store-item-icon");

    // looping through all  the shopping cart btn 
    cartBtn.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            // console.log(event.target);

            if (event.target.parentElement.classList.contains("store-item-icon")) {
                // console.log(event.target.parentElement.previousElementSibling.src);

                // path of the img  
                let fullPath = event.target.parentElement.previousElementSibling.src;

                // looking for the exact folder of d img 
                let pos = fullPath.indexOf("img") + 3;
                // console.log(pos);
                // console.log(fullPath);
                let partParth = fullPath.slice(pos);
                // console.log(partParth);

                // the price name and image item 
                const item = {};
                item.img = `img-cart${partParth}`;
                // console.log(item);
                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                // console.log(name);
                item.name = name;
                // console.log(name);

                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                // console.log(price);

                // removing d space n $ sign 
                let finalPrice = price.slice(1).trim();
                // console.log(finalPrice);
                item.price = finalPrice;
                // console.log(item);

                // trying to add d price name n img to d cart dinamically
                const cartItem = document.createElement("div");
                cartItem.classList.add(
                    "cart-item",
                    "d-flex",
                    "justify-content-between",
                    "text-capitalize",
                    "my-3"
                );

                cartItem.innerHTML = `
                    <img src="${
                       item.img
                    }" class="img-fluid rounded-circle" id="item-img" alt="">
                    <div class="item-text">
    
                      <p id="cart-item-title" class="font-weight-bold mb-0">${
                          item.name
                      }</p>
                      <span>$</span>
                      <span id="cart-item-price" class="cart-item-price" 
                      class="mb-0">${
                      item.price
                      }</span>
                    </div>
                    <a href="#" id='cart-item-remove' class="cart-item-remove">
                      <i class="fas fa-trash"></i>
                    </a>
                </div>
              `;

            //   select Cart
            const cart = document.getElementById("cart");
            const total = document.querySelector(".cart-total-container");

            cart.insertBefore(cartItem, total);
            alert("Item added to cart");
            showTotals();
            }
        });
    });

    // Shows Totals
    function showTotals() {
        const total = [];
        const items = document.querySelectorAll(".cart-item-price");

        items.forEach(function(item) {
            total.push(parseFloat(item.textContent));
        });
        // console.log(total);

        const totalMoney = total.reduce(function(total, item) {
            total += item;
            return total;
        }, 0);
        const finalMoney = totalMoney.toFixed(2);

        document.getElementById("cart-total").textContent = finalMoney;
        document.querySelector(".item-total").textContent = finalMoney;
        document.getElementById("item-count").textContent = total.length;
    }
}) ();