function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".hover-btn");

  buttons.forEach((btn) => {
    const projectId = btn.dataset.project;
    const direction = btn.dataset.dir;
    const wrapper = document.getElementById(`project${projectId}-wrapper`);

    btn.addEventListener("mouseenter", () => {
      wrapper.classList.remove("slide-left", "slide-right");
      wrapper.classList.add(
        direction === "left" ? "slide-left" : "slide-right"
      );
    });
  });
});
