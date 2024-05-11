const navbar = document.getElementById("navbar");
const navbarOffsetTop = navbar.offsetTop;
const backToTopButton = document.querySelector(".back-to-top");

function stickyNavbar() {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

window.onscroll = function () {
  stickyNavbar();
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
