
//social button
let socialBtn = document.querySelector('.social-buttons');
let socialHolderContent = document.querySelector('.social-holder');

socialBtn.addEventListener("click", () => {
    socialHolderContent.classList.toggle('social-active-holder');
})

