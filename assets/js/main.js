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
});
