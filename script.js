// mobile nav toggle
const navTrigger = document.querySelector(".navbar__nav-trigger");
const navTriggerInner = document.querySelector(".navbar__nav-trigger img");
const nav = document.querySelector(".navbar__nav-wrapper");

const openNav = () => {
  nav.classList.add("active");
  navTriggerInner.src = "./images/shared/mobile/close.svg";
};
const closeNav = () => {
  nav.classList.remove("active");
  navTriggerInner.src = "./images/shared/mobile/menu.svg";
};

navTrigger.addEventListener("click", (e) => {
  if (nav.classList.contains("active")) {
    closeNav();
  } else {
    openNav();
  }
});