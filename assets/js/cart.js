let table = document.querySelector(".table");
let arr2 = JSON.parse(localStorage.getItem("basket"));
let content2 = document.querySelector(".cart-wrapper");

function tableCreate(){
  if (localStorage.getItem("basket") != null) {
    table.classList.remove("d-none");
    arr2.forEach((p) => {
      let tr = `<tr>
      <td data-id="${p.id}" style="width: 490px;">
          <div class="cart-item d-flex align-items-center gap-5 center-item">
              <div class="cart-thumbnail">
                  <div class="cart-deleteBtn"><i class="fa-solid fa-xmark"></i></div>
                  <a href="#">
                      <img src="${p.imgUrl}" alt="">
                  </a>
              </div>
              <div class="cart-title">${p.name}</div>
          </div>
      </td>
      <td>
          <div class="cart-price center-item">
              <span>$${p.price}</span>
          </div>
      </td>
      <td>
          <div class="product-count center-item">
              <div class="shopping-cart__item__count">
                  <button class="shopping-cart__item__qty-minus"><i
                          class="fa-solid fa-minus"></i></button>
                  <input class="shopping-cart__item--count" value="${p.count}" placeholder="${p.count}"  type="text" pattern="\d{10}"
                      required value="1">
                  <button class="shopping-cart__item__qty-plus"><i
                          class="fa-regular fa-plus"></i></button>
              </div>
          </div>
      </td>
      <td>
          <div class="sub-total center-item">
              <span>$${(p.price * p.count).toFixed(2)}</span>
          </div>
      </td>
  </tr>`;
      table.lastElementChild.innerHTML += tr;
    });
    calculateTotalPrice(arr2);
    
  }
  
}
tableCreate();

let deleteBtn2 = document.querySelectorAll(".cart-deleteBtn");

deleteBtn2.forEach((deleteBtn) => {
  deleteBtn.setAttribute("onclick", "Delete(this)");
});

function Delete(item) {
  let product = item.parentNode.parentNode.firstElementChild.parentNode.parentNode.getAttribute("data-id").value; 
  arr2.splice(product, 1);
  localStorage.setItem("basket", JSON.stringify(arr2));
  item.parentNode.parentNode.firstElementChild.parentNode.parentNode.parentNode.remove();
  calculateProductCount();
  calculateTotalPrice();
  if (localStorage.getItem("basket") != null) {
    content2.innerHTML = "";
    console.log(arr2);
    arr2.forEach((p) => {
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
<div class="cart-item--delete deleteBtn">
    <i class="fa-solid fa-xmark"></i>
</div>
</div>   `;
        content2.innerHTML += div;
    });

    calculateTotalPrice(arr);
}
}

function calculateProductCount() {
  if (localStorage.getItem("basket") != null) {
      let basketCount2 = document.querySelector(".header-cart-count");
      let productCount = document.querySelector(".product-count");
      let sum = 0;
      arr2.forEach((p) => {
          sum += p.count;
          basketCount2.innerHTML = sum;
          productCount.innerHTML = sum;
      });
      basketCount2.innerHTML = sum;
      productCount.innerHTML = sum;
  }
}
calculateProductCount();


function calculateTotalPrice() {
  if (localStorage.getItem("basket") != null) {
    let totalPrice = document.querySelector(".total-price-span");
    let subtotalPrice = document.querySelector(".sub-total-bdi");
    let sum = 0;
    arr2.forEach((p) => {
      sum += p.price.slice(0, p.price.length - 1) * p.count;
      totalPrice.innerHTML = sum;
      subtotalPrice.innerHTML = sum;
    });
    totalPrice.innerHTML = sum.toFixed(2) + "$";
    subtotalPrice.innerHTML = sum.toFixed(2) + "$";
  }
}
calculateTotalPrice();

function calculateTotalPrice() {
  if (localStorage.getItem("basket") != null) {
    let totalPrice = document.querySelector(".total-price-basket");
    let totalPrice2 = document.querySelector(".total-price-span");
    let subtotalPrice = document.querySelector(".sub-total-bdi");
    let sum = 0;
    arr2.forEach((p) => {
      sum += p.price * p.count;
    });
    totalPrice.innerHTML = sum.toFixed(1) + "$";
    totalPrice2.innerHTML = sum.toFixed(1) + "$";
    subtotalPrice.innerHTML = sum.toFixed(2) + "$";
  }
}
calculateTotalPrice();