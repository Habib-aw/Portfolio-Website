document.addEventListener("scroll", function () {
  const logo = document.querySelector(".logo-haw");
  const navBar = document.querySelector(".nav-bar");
  if (window.scrollY > 0) {
    logo.classList.add("name-logo");
    navBar.classList.add("nav-scroll");
  } else {
    navBar.classList.remove("nav-scroll");
    logo.classList.remove("name-logo");
  }
});
