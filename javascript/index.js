document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 0) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
});
