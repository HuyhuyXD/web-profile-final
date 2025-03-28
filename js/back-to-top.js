const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
