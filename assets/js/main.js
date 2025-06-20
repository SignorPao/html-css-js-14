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
    let subLists = document.querySelectorAll(".mobile__submenu-list");
    for (let i = 0; i < subLists.length; i++) {
      subLists[i].classList.remove("show");
    }
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].classList.remove("show-menu");
    }
  }
});

// mobile menu accordion
let accordion = document.getElementsByClassName("mobile__menu-link");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("show");
    this.classList.toggle("show-menu");
  });
}

// show / hide header on scroll effect
let prevScrollpos = window.scrollY;

window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else if (currentScrollPos > document.querySelector("header").offsetHeight) {
    document.querySelector("header").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
};

// three cards swiper slider
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// offers swiper slider
const offers_swiper = new Swiper(".offers__swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".offers__swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    760: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

// footer accordion
let footerAccordion = document.getElementsByClassName("accordion__item-title");
for (let i = 0; i < footerAccordion.length; i++) {
  footerAccordion[i].addEventListener("click", function () {
    console.log("clicked");

    this.classList.toggle("show-footer-menu");
  });
}

// this year
let timeContainer = document.querySelector(".author time"),
  thisYear = new Date().getFullYear();
if (thisYear > 2024) {
  timeContainer.innerHTML = `2024 - ${thisYear}.`;
}
