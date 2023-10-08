let content = document.querySelector(".cart-wrapper");
let arr = JSON.parse(localStorage.getItem("basket"));

    if (localStorage.getItem("basket") != null) {
        content.innerHTML = "";
        arr.forEach((p) => {
            let div = `<div class="cart-item" data-id="${p.id}">
    <div class="cart-item__thumbnails">
        <a href="./product-detail.html"><img src="${p.imgUrl}"
                alt="${p.imgUrl}"></a>
    </div>
    <div class="cart-item__info">
        <h3 class="cart-item__title"><a href="./product-detail.html"><span>${p.name}</span></a></h3>
        <div class="cart-item--total">
            <span class="cart-item--count">${p.count}</span>x
            <span class="cart-item--price">$${p.price}</span>
        </div>
    </div>
    <div class="cart-item--delete deleteBtn" onclick="Delete(this)">
        <i class="fa-solid fa-xmark"></i>
    </div>
</div>   `;
            content.innerHTML += div;
        });

        calculateTotalPrice(arr);
    }

let deleteBtn = document.querySelectorAll(".deleteBtn");

deleteBtn.forEach((deleteBtn) => {
    deleteBtn.setAttribute("onclick", "Delete(this)");
});

function Delete(item) {
    let product = item.parentNode.getAttribute("data-id").value;
    console.log(product);
    arr.splice(product, 1);
    localStorage.setItem("basket", JSON.stringify(arr));
    item.parentNode.remove();
    calculateProductCount();
    calculateTotalPrice(arr);
}

function calculateProductCount() {
    if (localStorage.getItem("basket") != null) {
        let basketCount = document.querySelector(".header-cart-count");
        let productCount = document.querySelector(".product-count");
        let sum = 0;
        arr.forEach((p) => {
            sum += p.count;
            basketCount.innerHTML = sum;
            productCount.innerHTML = sum;
        });
        basketCount.innerHTML = sum;
        productCount.innerHTML = sum;
    }
}
calculateProductCount();


function calculateTotalPrice() {
    if (localStorage.getItem("basket") != null) {
      let totalPrice = document.querySelector(".total-price-basket");
      let sum = 0;
      arr.forEach((p) => {
        sum += p.price * p.count;
      });
      totalPrice.innerHTML = sum.toFixed(1) + "$";
    }
  }
  calculateTotalPrice();
