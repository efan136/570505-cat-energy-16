var navMain = document.querySelector(".main-nav");
    var navBtn = document.querySelector(".main-nav__menu-btn");
    var rng = document.getElementById('r1'); //rng - это Input
    var div = document.getElementById('before'); // div - блок test
    navMain.classList.remove("main-nav--nojs");
    navBtn.addEventListener("click", function() {
      if(navMain.classList.contains("main-nav--closed")) {
        navMain.classList.remove("main-nav--closed");
        navMain.classList.add("main-nav--opened");
      } else {
        navMain.classList.add("main-nav--closed");
        navMain.classList.remove("main-nav--opened");
      }
    })
function fun1() {
  div.style.width = rng.value +'%';
}
