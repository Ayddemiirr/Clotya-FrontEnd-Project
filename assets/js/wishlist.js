let table = document.querySelector(".table");
let arr3 = JSON.parse(localStorage.getItem("wishlist"));

if (localStorage.getItem("wishlist") != null) {
  table.innerHTML= "";
  arr3.forEach((p) => {
    let tr = `<tr data-id="${p.id}">
    <td style="width: 45.8px;">
        <div class="product-select center-item h-100">
            <input type="checkbox" name="select-item" id="select-item">
        </div>
    </td>
    <td style="width: 43.8px;">
        <div class="product-delete center-item">
            <div class="x-mark">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
    </td>
    <td style="width: 100px;">
        <div class="product-image center-item">
            <a href="#">
                <img src="${p.imgUrl}" alt="product-image1.jpg">
            </a>
        </div>
    </td>
    <td style="width: 413.56px;">
        <a href="#" class="product-title center-item">
            ${p.name}
        </a>
    </td>
    <td style="width: 188.34px;">
        <div class="product-price center-item gap-2">
            <del class="old-price">$${p.oldPrice}</del>
            <ins class="new-price">$${p.newPrice}</ins>
        </div>
    </td>
    <td style="width: 181.26px;">
        <div class="product-date center-item">
            <span>October 7,2023</span>
        </div>
    </td>
    <td style="width: 144.96px;">
        <div class="product-stock d-flex gap-3 align-items-center center-item">
            <i class="fa-solid fa-check"></i>
            In Stock
        </div>
    </td>
    <td style="width: 141.48px;">
        <div class="product-button center-item">
            <button class="product-add-btn">Add to Cart</button>
        </div>
    </td>
</tr>`;
    table.innerHTML += tr;
  });
}

let deleteBtn1 = document.querySelectorAll(".product-delete");

deleteBtn1.forEach((deleteBtn) => {
  deleteBtn.setAttribute("onclick", "Delete(this)");
});

function Delete(item) {
  let product = item.parentNode.parentNode.firstElementChild.parentNode.getAttribute("data-id").value;
  arr3.splice(product, 1);
  localStorage.setItem("basket", JSON.stringify(arr));
  item.parentNode.parentNode.remove();
}
