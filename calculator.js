let inpValue = document.querySelector(".inpvalue");
let buttons = document.querySelectorAll("button");
let colors = document.querySelectorAll(".calculator-colors");
let calculatorSurface = document.querySelector(".calculator-surface");

// statements for number and operator buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", getButton);
}

function getButton(button) {
    let buttonText = button.target.textContent;

    if (buttonText == "=") {
        if (inpValue.value != "") {

            inpValue.value = eval(inpValue.value);
        }
        buttonText = "";

    } else if (buttonText == "C") {
        inpValue.value = "";
        buttonText = "";
    }

    inpValue.value += buttonText;
}


// statements for color selection for background
for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", selectColor)
}

function selectColor(color) {

    let selectedColor = color.target.style.backgroundColor;
    calculatorSurface.style.backgroundColor = selectedColor;
    inpValue.style.backgroundColor = "white";

    let changeButtonColor = (buttonItem) => {
        buttonItem.style.backgroundColor = "#ccffcc";
        buttonItem.style.color = "black";
    }
    buttons.forEach(changeButtonColor);

}