function filterPriceRangeSlider() {
    const priceInputs = document.querySelectorAll(".price-input input");
    const rangeInputs = document.querySelectorAll(".range-input input");
    const range = document.querySelector(".slider .progress");

    let priceGap = 9;

    priceInputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrice = parseInt(priceInputs[0].value);
            let maxPrice = parseInt(priceInputs[1].value);

            if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInputs[1].max) {
                if (e.target.className === "min-input") {
                    rangeInputs[0].value = minPrice;
                    range.style.left = (minPrice / rangeInputs[0].max) * 100 + "%";
                } else {
                    rangeInputs[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInputs[1].max) * 100 + "%";
                }
            }
        });
    });

    rangeInputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInputs[0].value);
            let maxVal = parseInt(rangeInputs[1].value);

            if (maxVal - minVal < priceGap) {
                if (e.target.className === "min-range") {
                    rangeInputs[0].value = maxVal - priceGap;
                } else {
                    rangeInputs[1].value = minVal + priceGap;
                }
            } else {
                priceInputs[0].value = minVal;
                priceInputs[1].value = maxVal;
                range.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
                range.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
            }
        });
    });
}
filterPriceRangeSlider();

function toggleActiveColor(clickedElement) {
    const colorContents = document.querySelectorAll('.shop__filter__color__content');
    colorContents.forEach((element) => {
        if (element === clickedElement) {
            element.classList.add('active-color');
        } else {
            element.classList.remove('active-color');
        }
    });
}


