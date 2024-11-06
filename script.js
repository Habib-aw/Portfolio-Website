var sidebar = document.querySelector(".sidebar");
var body = document.body;

function myFunction() {
  if (!sidebar.classList.contains("open")) {
    sidebar.classList.add("open");
    body.style.overflow = "hidden"; // Prevent scrolling
    document.addEventListener("click", outsideClickListener);
  } else {
    closeSidebar();
  }
}

function closeSidebar() {
  sidebar.classList.remove("open");
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

// Close the sidebar when the window is resized
window.addEventListener("resize", function () {
  if (sidebar.classList.contains("open")) {
    closeSidebar();
  }
});

function copyEmail() {
  const tooltip = document.querySelector(".email-copied");
  navigator.clipboard.writeText("habib.awahid01@gmail.com");
  tooltip.style.visibility = "visible";

  setTimeout(() => {
    tooltip.style.visibility = "hidden";
  }, 3000);
}
function copyGitAccount() {
  const tooltip = document.querySelector(".git-copied");
  navigator.clipboard.writeText("https://www.github.com/Habib-aw");
  tooltip.style.visibility = "visible";

  setTimeout(() => {
    tooltip.style.visibility = "hidden";
  }, 3000);
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

// Scroll to the top when the button is clicked
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
