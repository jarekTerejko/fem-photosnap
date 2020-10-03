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

// pricing checkbox
const checkbox = document.querySelector(".pricing-plans__checkbox");
const priceElements = document.querySelectorAll(".pricing-plans__price");
const descriptionElements = document.querySelectorAll(
  ".pricing-plans__price-description"
);
const labelMonthly = document.querySelector(".pricing-plans__label-montlhy");
const labelYearly = document.querySelector(".pricing-plans__label-yearly");
const pricesMonthly = [19.0, 39.0, 99.0];
const pricesYearly = [190.0, 390.0, 990.0];

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    priceElements.forEach((priceEl, i) => {
      priceEl.textContent = `$${pricesYearly[i]}.00`;
    });
    descriptionElements.forEach((el) => {
      el.textContent = "per year";
    });
    labelMonthly.classList.remove("active");
    labelYearly.classList.add("active");
  } else {
    priceElements.forEach((priceEl, i) => {
      priceEl.textContent = `$${pricesMonthly[i]}.00`;
    });
    descriptionElements.forEach((el) => {
      el.textContent = "per month";
    });
    labelYearly.classList.remove("active");
    labelMonthly.classList.add("active");
  }
});
