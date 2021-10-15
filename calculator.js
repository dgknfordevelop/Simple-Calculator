var inpValue = document.querySelector(".inpvalue");
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", getTheButton);
}


//calculator functions for each of them
function getTheButton(button) {
    let buttonText = button.target.textContent;

        

    if (buttonText == "=") {
        
        inpValue.value = eval(inpValue.value);
        inpValue.value = "";
        buttonText = "";
               
    } else if (buttonText == "C") {
        inpValue.value = "";
        buttonText = "";
    }

    inpValue.value += buttonText;
    button.preventDefault();
}


