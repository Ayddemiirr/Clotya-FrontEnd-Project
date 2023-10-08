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

