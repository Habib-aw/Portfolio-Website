var sidebar = document.querySelector(".sidebar");
function myFunction() {
  if (sidebar.style.display === "none" || sidebar.style.display === "") {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
}

const btn = document.querySelector(".to-top");

// Show the button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});
window.addEventListener("resize", () => {
  if (window.screenX >= 1024) {
    x.style.display = "flex";
  }
});

// Scroll to the top when the button is clicked
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
