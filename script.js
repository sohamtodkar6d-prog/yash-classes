document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.getElementById("modeToggle");
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }

  // Toggle theme
  toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

  });

});
