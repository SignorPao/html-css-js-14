const burgerButton = document.getElementById("burger"),
  mobileMenu = document.querySelector(".mobile__menu");

// mobile menu show / close
burgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  // change icons
  mobileMenu.classList.contains("active")
    ? document
        .querySelector(".burger use")
        .setAttribute("href", "/assets/icons/close.svg#close")
    : document
        .querySelector(".burger use")
        .setAttribute("href", "/assets/icons/burger.svg#burger");
});
