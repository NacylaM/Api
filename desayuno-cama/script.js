let loadMoreBtn1 = document.querySelector("#load-more-1");
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll(
        ".box-container-1 .box-1"
    )];
    for(var i = currentItem1; i <currentItem1+4; i++) {
    boxes[i].style.display = "inline-block";
    }
    currentItem1 += 4;
    if(currentItem1 >= boxes.length) {

    loadMoreBtn1.style.display = "none"
    }
        
    }

    let loadMoreBtn2 = document.querySelector("#load-more-2");
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll(
        ".box-container-2 .box-2"
    )];
    for(var i = currentItem2; i <currentItem2+4; i++) {
    boxes[i].style.display = "inline-block";
    }
    currentItem2 += 4;
    if(currentItem1 >= boxes.length) {

    loadMoreBtn1.style.display = "none"
    }
        
    }




        document.querySelector(".menu-btn").addEventListener("click", () => {
            document.querySelector(".nav-menu").classList.toggle("show");
          });
          
          ScrollReveal().reveal('.showcase');
          ScrollReveal().reveal('.news-cards', { delay: 500 });
          ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
          ScrollReveal().reveal('.cards-banner-two', { delay: 500 });