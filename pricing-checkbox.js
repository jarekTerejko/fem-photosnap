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

const toggleYearly = () => {
  priceElements.forEach((priceEl, i) => {
    priceEl.textContent = `$${pricesYearly[i]}.00`;
  });
  descriptionElements.forEach((el) => {
    el.textContent = "per year";
  });
  labelMonthly.classList.remove("active");
  labelYearly.classList.add("active");
};

const toggleMonthly = () => {
  priceElements.forEach((priceEl, i) => {
    priceEl.textContent = `$${pricesMonthly[i]}.00`;
  });
  descriptionElements.forEach((el) => {
    el.textContent = "per month";
  });
  labelYearly.classList.remove("active");
  labelMonthly.classList.add("active");
};

checkbox.addEventListener("click", (e) => {
  if (checkbox.checked) {
    toggleYearly();
  } else {
    toggleMonthly();
  }
});