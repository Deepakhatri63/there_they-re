document.addEventListener("DOMContentLoaded", function () {
  let fadeInElements = document.querySelectorAll(".fade-in");

  function fadeInCheck() {
    fadeInElements.forEach(function (element) {
      let elementTop = element.getBoundingClientRect().top;
      let elementBottom = element.getBoundingClientRect().bottom;

      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.style.opacity = "1";
      }
    });
  }

  document.addEventListener("scroll", fadeInCheck);
  document.addEventListener("resize", fadeInCheck);

  fadeInCheck(); // Initial check when the page loads
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrolled = window.scrollY > 300;
  navbar.classList.toggle("scrolled", scrolled);
});
