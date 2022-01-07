var nebBagroundColor = document.querySelector("#bg-navbar");
window.onscroll = () => {
  var scrollNavbar = window.scrollY;
  if (scrollNavbar >= 100) {
    nebBagroundColor.classList.add("nav-scrollbar-Color");
  } else {
    nebBagroundColor.classList.remove("nav-scrollbar-Color");
  }
};
