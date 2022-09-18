const cardNameElement = document.querySelector(".card-front-name");
const cardNumberElement = document.querySelector(".card-front-number");
const cardMonthElement = document.querySelector(".card-front-month");
const cardYearElement = document.querySelector(".card-front-year");
const cardCvcElement = document.querySelector(".card-back-cvc");
const submitButton = document.querySelector("#submit");


const cardNumberChange = (cardNumberInput) => {
  if (!cardNumberInput.value.match(/\D+/)) {
    document.querySelector("#number-error").style.display = "none";
    submitButton.removeAttribute("disabled");
    cardNumberInput.value === ""
    ? (cardNumberElement.textContent = "0000 0000 0000 0000")
    : (cardNumberElement.textContent = cardNumberInput.value.match(/.{1,4}/g).join(" "));
  }
  else{
    document.querySelector("#number-error").style.display = "inline";
    submitButton.setAttribute("disabled", true);
  }
};

const cardNameChange = (cardNameInput) => {
  if (!cardNameInput.value.match(/\d/g)){
    document.querySelector("#name-error").style.display = "none";
    submitButton.removeAttribute("disabled");
    cardNameInput.value === ""
    ? (cardNameElement.textContent = "Jane Appleseed")
    : (cardNameElement.textContent = cardNameInput.value);
  }
  else{
    document.querySelector("#name-error").style.display = "inline";
    submitButton.setAttribute("disabled", true);
  }
};

const cardMonthChange = (cardMonthInput) => {
  if (cardMonthInput.value >= 00 && cardMonthInput.value <=12){
    document.querySelector("#exp-error").style.display = "none";
    submitButton.removeAttribute("disabled");
    cardMonthInput.value === "" 
        ? (cardMonthElement.textContent = "00")
        : (cardMonthElement.textContent = cardMonthInput.value);
    }
    else{
        document.querySelector("#exp-error").style.display = "inline";
        submitButton.setAttribute("disabled", true);
    }
};

const cardYearChange = (cardYearInput) => {
  if (cardYearInput.value >= 00 && cardYearInput.value <=99){
    document.querySelector("#exp-error").style.display = "none";
    submitButton.removeAttribute("disabled");
    cardYearInput.value === "" 
        ? (cardYearElement.textContent = "00")
        : (cardYearElement.textContent = cardYearInput.value);
    }
    else{
        document.querySelector("#exp-error").style.display = "inline";
        submitButton.setAttribute("disabled", true);
    }
};

const cardCvcChange = (cardCvcInput) => {
  if(cardCvcInput.value >= 000 && cardCvcInput.value <= 999){
    document.querySelector("#cvc-error").style.display = "none";
    submitButton.removeAttribute("disabled");
    cardCvcInput.value === "" 
    ? (cardCvcElement.textContent = "123")
    : (cardCvcElement.textContent = cardCvcInput.value);
  }
  else{
    document.querySelector("#cvc-error").style.display = "inline";
    submitButton.setAttribute("disabled", true);
  }
};

const submitCard = () => {
    cardNameElement.textContent = cardNameElement.textContent
    cardNumberElement.textContent = cardNumberElement.textContent
    cardMonthElement.textContent = cardMonthElement.textContent
    cardYearElement.textContent = cardYearElement.textContent
    cardCvcElement.textContent = cardCvcElement.textContent
    document.querySelector(".card-form").style.display = "none";
    document.querySelector(".thank-you-container").style.display = "flex";
}

const continueForm = () => {
    cardNameElement.textContent = "JANE ALDEHER"
    cardNumberElement.textContent = "0000 0000 0000 0000"
    cardMonthElement.textContent = "00"
    cardYearElement.textContent = "00"
    cardCvcElement.textContent = "123"
    document.querySelector(".card-form").style.display = "flex";
    document.querySelector(".thank-you-container").style.display = "none";
}