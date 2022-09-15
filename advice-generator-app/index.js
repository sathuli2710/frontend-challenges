const adviceIdElement = document.getElementById("advice-id");
const adviceTextElement = document.getElementById("advice-text");


async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const advice = await res.json();
    console.log(advice);
    const adviceId = advice.slip.id;
    const adviceText = advice.slip.advice;
    adviceIdElement.textContent = '#' + adviceId;
    adviceTextElement.textContent = '“' + adviceText + '”';
}

getAdvice();