// DARK MODE TOGGLE WITH LOCAL STORAGE

const toggleBtn = document.getElementById("modeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

// MOBILE MENU
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
