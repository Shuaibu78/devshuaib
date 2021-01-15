let mobileMenuButton = document.getElementById("mobileMenuButton");
mobileMenuButton.onclick = function() {
  document.getElementById("sideMenuHideOnMobile").classList.toggle("-translate-y-full");
  document.getElementById("sideMenuHideOnMobile").classList.toggle("mt-12");
  document.getElementById("sideMenuHideOnMobile").classList.toggle("shadow");
  document.getElementById("mobileMenuButtonClose").classList.toggle("hidden");
  document.getElementById("mobileMenuButtonOpen").classList.toggle("hidden");
}
// Hide element when click outside nav
var theElementContainer = document.getElementsByTagName("nav")[0];
document.addEventListener('click', function(event) {
  if (!theElementContainer.contains(event.target)) {
      document.getElementById("sideMenuHideOnMobile").classList.add("-translate-y-full");
      document.getElementById("sideMenuHideOnMobile").classList.remove("mt-12");
      document.getElementById("sideMenuHideOnMobile").classList.remove("shadow");
      document.getElementById("mobileMenuButtonOpen").classList.remove("hidden");
      document.getElementById("mobileMenuButtonClose").classList.add("hidden");
  }
});

const scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {
  let y = window.scrollY;
  
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};

scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}