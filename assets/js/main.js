let socialBtn = document.querySelector('.social-buttons');
let socialHolderContent = document.querySelector('.social-holder');

socialBtn.addEventListener("click", () => {
    socialHolderContent.classList.toggle('social-active-holder');
})


function navModal() {
    let navBtn = document.querySelector(".nav-menu");
    let navModal = document.querySelector("#nav-modal");
    let close = document.getElementsByClassName("close")[0];

    navBtn.addEventListener("click", function () {
        navModal.style.display = "block";
    });

    close.addEventListener("click", function () {
        navModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == navModal) {
            navModal.style.display = "none";
        }
    });
}
navModal();

function navMenu() {
    let homeLiBtn = document.querySelector('.home-li-btn');
    let homeAltUl = document.querySelector('.home--alt-ul');
    let shopLiBtn = document.querySelector('.shop-li-btn');
    let shopAltUl = document.querySelector('.shop--alt-ul');
    let menLiBtn = document.querySelector('.men-li-btn');
    let menAltUl = document.querySelector('.men--alt-ul');
    let womenLiBtn = document.querySelector('.women-li-btn');
    let womenAltUl = document.querySelector('.women--alt-ul');

    homeLiBtn.addEventListener('click', () => {
        homeAltUl.classList.toggle('alt-ul-display');
    })
    shopLiBtn.addEventListener('click', () => {
        shopAltUl.classList.toggle('alt-ul-display');
    })
    menLiBtn.addEventListener('click', () => {
        menAltUl.classList.toggle('alt-ul-display');
    })
    womenLiBtn.addEventListener('click', () => {
        womenAltUl.classList.toggle('alt-ul-display');
    })
}
navMenu();

function localStorageAdd() {
    let basketBtn = document.querySelectorAll(".add-to-card");
    let arr = JSON.parse(localStorage.getItem("basket"));

    basketBtn.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            let priceText = this.parentNode.parentNode.nextElementSibling.lastElementChild.lastElementChild.innerText;
            let priceValue = priceText.substring(1);

            let id = this.parentNode.parentNode.parentNode.getAttribute("data-id");
            if (localStorage.getItem("basket") == null) {
                localStorage.setItem("basket", JSON.stringify([]));
            }
            arr = JSON.parse(localStorage.getItem("basket"));
            let existProduct = arr.find((p) => p.id == id);
            if (existProduct == undefined) {
                arr.push({
                    id: id,
                    imgUrl: this.parentNode.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.getAttribute("src"),
                    name: this.parentNode.parentNode.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.innerText,
                    review: this.parentNode.parentNode.nextElementSibling.firstElementChild.getAttribute("data-raiting"),
                    price: priceValue,
                    count: 1
                });
            } else {
                existProduct.count++
            }
            localStorage.setItem("basket", JSON.stringify(arr));
            calculateProductCount();
            BasketShow();
            calculateTotalPrice();
        });
    });

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

    let deleteBtn = document.querySelectorAll(".deleteBtn");

    deleteBtn.forEach((deleteBtn) => {
        deleteBtn.setAttribute("onclick", "Delete(this)");
    });

    function Delete(item) {
        let product = item.parentNode.getAttribute("data-id").value;
        arr.splice(product, 1);
        localStorage.setItem("basket", JSON.stringify(arr));
        item.parentNode.remove();
        calculateProductCount();
        calculateTotalPrice(arr);
    }

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
}
localStorageAdd();

function BasketShow() {
    let content = document.querySelector(".cart-wrapper");
    let arr = JSON.parse(localStorage.getItem("basket"));

    if (localStorage.getItem("basket") != null) {
        content.innerText = "";
        arr.forEach((p) => {
            let div = `<div class="cart-item data-id="${p.id}">
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
    }
}

function localStorageWishlist() {
    let wishlistBtn = document.querySelectorAll(".wishlist");
    let wish = JSON.parse(localStorage.getItem("wishlist"));

    wishlistBtn.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            let priceText1 = this.parentNode.parentNode.nextElementSibling.lastElementChild.lastElementChild.innerText;
            let priceText2 = this.parentNode.parentNode.nextElementSibling.lastElementChild.firstElementChild.innerText;

            let id = this.parentNode.parentNode.parentNode.getAttribute("data-id");
            if (localStorage.getItem("wishlist") == null) {
                localStorage.setItem("wishlist", JSON.stringify([]));
            }
            wish = JSON.parse(localStorage.getItem("wishlist"));
            let existProduct = wish.find((p) => p.id == id);
            if (existProduct == undefined) {
                wish.push({
                    id: id,
                    imgUrl: this.parentNode.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.getAttribute("src"),
                    name: this.parentNode.parentNode.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.innerText,
                    review: this.parentNode.parentNode.nextElementSibling.firstElementChild.getAttribute("data-raiting"),
                    newPrice: priceText1.substring(1),
                    oldPrice: priceText2.substring(1),
                    count: 1
                });
            } else {
                existProduct.count++
            }
            localStorage.setItem("wishlist", JSON.stringify(wish));
            calculateProductCount();
            BasketShow();
            calculateTotalPrice();
        });
    });

    function calculateProductCount() {
        if (localStorage.getItem("wishlist") != null) {
            let basketCount = document.querySelector(".header-wishlist-count");
            let sum = 0;
            wish.forEach((p) => {
                sum += p.count;
                basketCount.innerHTML = sum;
            });
            basketCount.innerHTML = sum;
        }
    }
    calculateProductCount();

    let deleteBtn = document.querySelectorAll(".product-delete");

    deleteBtn.forEach((deleteBtn) => {
        deleteBtn.setAttribute("onclick", "Delete(this)");
    });

    function Delete(item) {
        let product = item.parentNode.getAttribute("data-id").value;
        wish.splice(product, 1);
        localStorage.setItem("basket", JSON.stringify(wish));
        item.parentNode.remove();
        calculateProductCount();
        calculateTotalPrice(wish);
    }
}
localStorageWishlist();


