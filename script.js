function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("project1-wrapper");
  const btn1 = document.querySelector(".hover-btn-1");
  const btn2 = document.querySelector(".hover-btn-2");

  btn2.addEventListener("mouseenter", () => {
    wrapper.classList.add("slide-left");
    wrapper.classList.remove("slide-right");
  });

  btn1.addEventListener("mouseenter", () => {
    wrapper.classList.add("slide-right");
    wrapper.classList.remove("slide-left");
  });
});
