import AOS from "aos";

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
  if (window.innerWidth > 950) {
    button.style.display = "none";
    menu.style.display = "none";
  } else {
    button.style.display = "block";
    menu.style.display = "block";
  }
}

window.onload = () => showMenu();
window.addEventListener("resize", showMenu);
button.addEventListener("click", toggleMenu);

//* Go to top button //

//Get the button
const topBtn = document.getElementById("topBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 2000 ||
    document.documentElement.scrollTop > 2000
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topBtn.addEventListener("click", topFunction);
AOS.init();
