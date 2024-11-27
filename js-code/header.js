const header = document.getElementsByTagName("header")[0];
const linkNav = document.querySelectorAll("header nav ul li a");
const headerLinks = document.querySelectorAll("header nav ul")[0];
const menu = document.querySelectorAll("header nav ul .menu")[0];
const menuBar = document.getElementById("menu-bar");
const menuLinks = document.querySelectorAll("header nav ul .menu ul")[0];
const menuIcon = document.getElementById("menu-icon");
const barIcon = document.getElementById("bar-icon");
const closeIcon = document.getElementById("close-icon");

barIcon.addEventListener("click", () => {
  headerLinks.style.display = "block";
  barIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  headerLinks.style.display = "none";
  closeIcon.style.display = "none";
  barIcon.style.display = "block";
});

menuLinks.style.display = "none";
menuBar.addEventListener("click", () => {
  const isActive = menuLinks.style.display === "block";
  menuLinks.style.display = isActive ? "none" : "block";

  menuBar.innerHTML = isActive
    ? `<p>Menu</p><i class="fa-solid fa-angle-down"></i>`
    : `<p>Menu</p><i class="fa-solid fa-angle-up"></i>`;
});

menuBar.style.color = "white";
addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.style.backgroundColor = "var(--bg-color)";
    linkNav.forEach((link) => {
      link.style.color = "var(--text-color)";
      menuBar.style.color = "var(--text-color)";
    });
  } else {
    header.style.backgroundColor = "transparent";
    linkNav.forEach((link) => {
      link.style.color = "white";
      menuBar.style.color = "white";
    });
  }
});
