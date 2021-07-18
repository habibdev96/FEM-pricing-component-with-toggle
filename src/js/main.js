"use scrict";

const toggle = document.querySelector(".switch__checkbox");
const basicPrice = document.querySelector("#basic-price");
const proPrice = document.querySelector("#pro-price");
const masterPrice = document.querySelector("#master-price");

const checkCheckbox = () => {
  if (toggle.checked) {
    basicPrice.innerText = "$19.99";
    proPrice.innerText = "$24.99";
    masterPrice.innerText = "$39.99";
  } else {
    basicPrice.innerText = "$119.99";
    proPrice.innerText = "$249.99";
    masterPrice.innerText = "$399.99";
  }
};

toggle.addEventListener("change", checkCheckbox);
