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
function myFunction() {
  var x = document.getElementById("nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
