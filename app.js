let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText == "=") {
      string = String(eval(string));
      input.value = string;
    } else if (e.target.innerText == "RESET") {
      string = "";
      input.value = string;
    } else if (e.target.innerText == "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string = string + e.target.innerText;
      input.value = string;
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9) {
    string = string + e.key;
    input.value = string;
  } else if (e.key === "Enter") {
    string = String(eval(string));
    input.value = string;
  } else if (e.key === "Backspace") {
    string = string.slice(0, -1);
    input.value = string;
  } else {
    string = string + e.key;
    input.value = string;
  }
});
