function accountTablist() {
    let tabLi = document.querySelectorAll('.tab-item');
    let tabLiContent = document.querySelectorAll('.tab-menu')
  
    tabLi.forEach((item, index) => {
      item.addEventListener('click', () => {
        tabLi.forEach(item => {
          item.classList.remove('tab-active')
        })
        item.classList.add('tab-active');
  
        tabLiContent.forEach(item => {
          item.classList.remove("menu-active");
        })
        tabLiContent[index].classList.add('menu-active');
  
      })
    });
  }
accountTablist();