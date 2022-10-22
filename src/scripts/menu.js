const button = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const containers = document.querySelectorAll(".container");

containers.forEach((container) =>
  container.addEventListener("click", () => {
    if (menu.classList.contains("menu--active")) {
      toggleMenu();
    }
  })
);

function toggleMenu() {
  button.classList.toggle("hamburger--active");
  menu.classList.toggle("menu--active");
}

function showMenu() {
  if (window.innerWidth > 800) {
    button.style.display = "none";
    menu.style.display = "none";
  } else {
    button.style.display = "block";
    menu.style.display = "flex";
  }
}

window.onload = () => showMenu();
window.addEventListener("resize", showMenu);
button.addEventListener("click", toggleMenu);
