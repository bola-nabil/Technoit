let themeMode = document.getElementById("theme-page");
let lightMode = document.getElementById("light-mode");
let darkMode = document.getElementById("dark-mode");
const body = document.body;
const savedTheme = sessionStorage.getItem("theme");

lightMode.style.display = "none";

if (savedTheme) {
  body.classList.add(savedTheme);
  updateIcon(savedTheme);
}

themeMode.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  const theme = isDarkMode ? "dark-mode" : "";

  sessionStorage.setItem("theme", theme);
  updateIcon(theme);
});

function updateIcon(theme) {
  if (theme === "dark-mode") {
    lightMode.style.display = "block";
    darkMode.style.display = "none";
  } else {
    lightMode.style.display = "none";
    darkMode.style.display = "block";
  }
}
