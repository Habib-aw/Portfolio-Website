var sidebar = document.querySelector(".sidebar");
var body = document.body;

function myFunction() {
  if (sidebar.style.display === "none" || sidebar.style.display === "") {
    sidebar.style.display = "flex";
    body.style.overflow = "hidden"; // Prevent scrolling
    document.addEventListener("click", outsideClickListener);
  } else {
    closeSidebar();
  }
}

function closeSidebar() {
  sidebar.style.display = "none";
  body.style.overflow = "auto"; // Allow scrolling
  document.removeEventListener("click", outsideClickListener);
}

function outsideClickListener(event) {
  if (
    !sidebar.contains(event.target) &&
    !event.target.closest(".hamburger-menu")
  ) {
    closeSidebar();
  }
}

// Automatically close the sidebar when a link inside it is clicked
sidebar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

const btn = document.querySelector(".to-top");

// Show the button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});

// Scroll to the top when the button is clicked
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
