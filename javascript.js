const buttons = document.querySelector("button");
const screenDisplay = document.querySelector("screen");

function calculate() {}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
