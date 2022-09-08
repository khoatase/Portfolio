//Menu

const menu = document.querySelector(".navbar__links");
const menuBtn = document.querySelector(".navbar_icons");
const overLay = document.querySelector("#overlay");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuBtn.classList.toggle("open");
  overLay.classList.toggle("show");
});

overLay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuBtn.classList.toggle("open");
  overLay.classList.toggle("show");
});
