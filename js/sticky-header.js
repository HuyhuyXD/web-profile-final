let lastScrollY = window.scrollY;
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    header.classList.add("hide-header");
  } else {
    header.classList.remove("hide-header");
  }
  lastScrollY = window.scrollY;
});
