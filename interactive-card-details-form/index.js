const cardNumberChange = () => {
    const cardNumberInput = document.getElementById("card-number");
    const cardNumberElement = document.querySelector(".card-front-number");
    cardNumberElement.textContent = cardNumberInput.value;
}

const cardNameChange = () => {
    const cardNameInput = document.getElementById("card-name");
    const cardNameElement = document.querySelector(".card-front-name");
    cardNameElement.textContent = cardNameInput.value;
}


const cardMonthChange = () => {
    const cardMonthInput = document.getElementById("card-month");
    const cardMonthElement = document.querySelector(".card-front-month");
    cardMonthElement.textContent = cardMonthInput.value;
}

const cardYearChange = () => {
    const cardYearInput = document.getElementById("card-year");
    const cardYearElement = document.querySelector(".card-front-year");
    cardYearElement.textContent = cardYearInput.value;
}

const cardCvcChange = () => {
    const cardCvcInput = document.getElementById("card-cvc");
    const cardCvcElement = document.querySelector(".card-back-cvc");
    cardCvcElement.textContent = cardCvcInput.value;
}
