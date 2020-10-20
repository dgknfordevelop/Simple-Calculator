var inpvalue = document.getElementById("inpvalue");


function functopr() {

    if (inpvalue.value == "") {

        inpvalue.value = "kidding?";
        setTimeout(function() {
            inpvalue.value = "";
        }, 750)
    };

    inpvalue.value = eval(inpvalue.value);
};


function funct0() {
    inpvalue.value += "0";
};

function funct1() {
    inpvalue.value += "1";
};

function funct2() {
    inpvalue.value += "2";
};

function funct3() {
    inpvalue.value += "3";
};

function funct4() {
    inpvalue.value += "4";
};

function funct5() {
    inpvalue.value += "5";
};

function funct6() {
    inpvalue.value += "6";
};

function funct7() {
    inpvalue.value += "7";
};

function funct8() {
    inpvalue.value += "8";
};

function funct9() {
    inpvalue.value += "9";
};

function functC() {
    inpvalue.value = "";
}

function functpls() {
    inpvalue.value += "+";
};

function functmns() {
    inpvalue.value += "-";
};

function functcrs() {
    inpvalue.value += "*";
};

function functdvd() {
    inpvalue.value += "/";
};
