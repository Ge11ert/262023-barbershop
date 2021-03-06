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

(function () {

  "use strict";

  var modal = document.querySelector(".modal");
  var modalCLose = modal.querySelector(".modal__close");
  var loginButton = document.querySelector(".user-nav__link");

  var login = modal.querySelector("[name=user]");
  var password = modal.querySelector("[name=password]");

  loginButton.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.add("modal--open");
    login.focus();
  });

  modalCLose.addEventListener("click", function() {
    modal.classList.remove("modal--open");
  });

  window.addEventListener("keydown", function(e) {
    if (e.keyCode === 27) {
      modal.classList.remove("modal--open");
    }
  });


}());
