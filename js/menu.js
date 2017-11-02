// FUNCTIONS START //
function initMenu(menuButton, menuList) {
  menuButton.classList.add("main-nav__toggle--show");
  menuButton.classList.add("main-nav__toggle--closed");
  menuList.classList.add("main-nav__wrapper--closed");
}

var menuButton = document.querySelector(".main-nav__toggle");
var menuList = document.querySelector(".main-nav__wrapper");

initMenu(menuButton, menuList);

menuButton.addEventListener("click", function(e) {
  menuButton.classList.toggle("main-nav__toggle--closed");
  menuList.classList.toggle("main-nav__wrapper--closed");
});


svg4everybody();
