function imageThumbnails() {
    let productImages = document.querySelectorAll('.product-item__image');
    let mainImages = document.querySelectorAll('.product-item__main-image-item');

    productImages.forEach(image => {
        image.addEventListener('click', function () {
            productImages.forEach(function (img) {
                img.classList.remove('active');
            });

            image.classList.add('active');
        });
    });

    productImages.forEach((image, index) => {
        image.addEventListener('click', function () {
            mainImages.forEach((element, indexer) => {
                if (index == indexer) {
                    mainImages.forEach(img => {
                        img.classList.remove('active');
                    })
                    element.classList.add('active')
                }
            });
        })
    });
}
imageThumbnails();

function productTabList() {
    let tabLi = document.querySelectorAll('.product-tab-list__li');
    let tabLiContent = document.querySelectorAll('.product-tab-list__content')

    tabLi.forEach((item, index) => {
        item.addEventListener('click', () => {
            tabLi.forEach(item => {
                item.classList.remove('active-selected')
            })
            item.classList.add('active-selected');

            tabLiContent.forEach(item => {
                item.classList.remove("active-content");
            })
            tabLiContent[index].classList.add('active-content');

        })
    });
}
productTabList();

function modalImageActive() {
    let mainImages = document.querySelectorAll('.product-item__main-image-item');
    let modal = document.getElementById('imageModal');
    let modalImage = document.querySelector('.modal-image');
    let close = document.querySelector('.imageModal-close');

    mainImages.forEach(mainImage => {
        mainImage.addEventListener('click', function () {
            if (mainImage.classList.contains('active')) {
                modal.style.display = 'block';
                image = mainImage.querySelector('.product-item__main-image');
                modalImage.src = image.src;
            }
        });
    })

    close.addEventListener('click', function () {
        modal.style.display = 'none';
    });
}
modalImageActive();


//#region reviewCommentBtn
function reviewCommentBtn() {
    let commentBtn = document.querySelector('#reviewBtn');
    let commentContent = document.querySelector('.review__write-content');

    commentBtn.addEventListener('click', function () {
        if (commentContent.classList.contains('active')) {
            commentContent.classList.remove('active');
        } else {
            commentContent.classList.add('active');
        }
    })
}
reviewCommentBtn();
//#endregion

//#region reviewCharacterLimit
function reviewCharacterLimit() {
    const reviewDescription = document.getElementById("review-description");
    const charCount = document.getElementById("charCount");

    reviewDescription.addEventListener("input", updateCharCount);

    function updateCharCount() {
        const maxLength = reviewDescription.getAttribute("maxlength");
        const currentLength = reviewDescription.value.length;
        const remainingChars = maxLength - currentLength;

        charCount.textContent = "Body of Review (" + remainingChars + ")";
    }
}
reviewCharacterLimit();
//#endregion

//#region reviewRaiting
function reviewRaiting() {

    const stars = document.querySelectorAll('.review__write-content__choose-raiting--star');

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            for (let i = 0; i <= index; i++) {
                const icon = stars[i].querySelector('i');
                icon.style.color = 'rgb(255, 164, 34)';
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            }
            for (let i = index + 1; i < stars.length; i++) {
                const icon = stars[i].querySelector('i');
                icon.style.color = '';
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
        });
    });
}
reviewRaiting();
//#endregion

//#region shareModal
function shareModal() {
    let askQuestionButton = document.getElementById("shareBtn");
    let modal = document.getElementById("shareModal");
    let close = document.getElementsByClassName("shareModal-close")[0];
    let urlInput = document.querySelector('#shareModal-input');

    askQuestionButton.addEventListener("click", function () {
        modal.style.display = "block";
        let url = window.location.href;
        urlInput.value = url;
    });

    close.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
shareModal();
//#endregion

//#region copyUrl
function copyUrl() {
    let copyBtn = document.querySelector('#shareModal-copy');
    let urlInput = document.querySelector('#shareModal-input');

    copyBtn.addEventListener('click', function () {
        urlInput.select();
        urlInput.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(urlInput.value);

        alert("Copied the text: " + urlInput.value);
    })
}
copyUrl();
//#endregion

//#region sizeGuideModal
function sizeGuideModal() {
    let sizeGuide = document.getElementById("sizeGuide");
    let modal = document.getElementById("size-modal");
    let close = document.getElementsByClassName("close")[0];

    sizeGuide.addEventListener("click", function () {
        modal.style.display = "block";
    });

    close.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
sizeGuideModal();
//#endregion