const burgerButton = document.getElementById("burger"),
  mobileMenu = document.querySelector(".mobile__menu"),
  body = document.querySelector("body"),
  overlay = document.querySelector(".overlay__body");

// mobile menu show / close
burgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  body.classList.toggle("lock");
  overlay.classList.toggle("active");

  // change icons
  mobileMenu.classList.contains("active")
    ? document
        .querySelector(".burger use")
        .setAttribute("href", "/assets/icons/close.svg#close")
    : document
        .querySelector(".burger use")
        .setAttribute("href", "/assets/icons/burger.svg#burger");

  // close all sublists
  if (!mobileMenu.classList.contains("active")) {
    console.log("not");
    let subLists = document.querySelectorAll(".mobile__submenu-list");
    for (let i = 0; i < subLists.length; i++) {
      subLists[i].classList.remove("show");
    }
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].classList.remove("show-menu");
    }
  }
});

// show / hide header on scroll effect
let prevScrollpos = window.scrollY,
  headerDiv = document.querySelector("header"),
  headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos || currentScrollPos < headerBottom) {
    headerDiv.style.top = "0";
  } else {
    headerDiv.style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
};

// mobile menu accordion
let accordion = document.getElementsByClassName("mobile__menu-link");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("show");
    this.classList.toggle("show-menu");
  });
}
