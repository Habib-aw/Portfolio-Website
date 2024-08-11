document.addEventListener("scroll", function () {
  const top = document.querySelector(".to-top");
  if (window.scrollY > 200) {
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
});
function myFunction() {
  var x = document.querySelector(".nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
const btn = document.querySelector(".to-top");
btn.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});
