function readWrite_1() {
    let number = document.getElementById("number_1").innerHTML;
    document.getElementById("output").innerHTML += number;
}
function readWrite_2() {
    let number = document.getElementById("number_2").innerHTML;
    document.getElementById("output").innerHTML += number;
}
function readWrite_3() {
    let number = document.getElementById("number_3").innerHTML;
    document.getElementById("output").innerHTML += number;
}
function readWrite_4() {
    let number = document.getElementById("number_4").innerHTML;
    document.getElementById("output").innerHTML += number;
}
function readWrite_5() {
    let number = document.getElementById("number_5").innerHTML;
    document.getElementById("output").innerHTML += number;
}
function readWrite_6() {
    let number = document.getElementById("number_6").innerHTML;
    document.getElementById("output").innerHTML += number;
}
function readWrite_7() {
    let number = document.getElementById("number_7").innerHTML;
    document.getElementById("output").innerHTML += number;
}
function readWrite_8() {
    let number = document.getElementById("number_8").innerHTML;
    document.getElementById("output").innerHTML += number;
}

function readWrite_9() {
    let number = document.getElementById("number_9").innerHTML;
    document.getElementById("output").innerHTML += number;
}
function readWrite_0() {
    let number = document.getElementById("number_0").innerHTML;
    document.getElementById("output").innerHTML += number;
}
function readWrite_koma() {
    let number = document.getElementById("number_koma").innerHTML;
    document.getElementById("output").innerHTML += number;
}
function readWrite_pi() {
    let number = Math.PI;
    document.getElementById("output").innerHTML += number;
}
function clearAll() {
    document.getElementById("output").innerHTML = "";
}


/////////Checker of operators
function finder() {
    let text = document.getElementById("output").innerHTML;
    let i = text.includes("+");
    if (i == true) {
        return false;
    }
    i = text.includes("-");
    if (i == true) {
        return false;
    }
    i = text.includes("*");
    if (i == true) {
        return false;
    }
    i = text.includes("/");
    if (i == true) {
        return false;
    } else {
        return true;
    }
}
/////////////////////////////////


function plus() {
    if (finder() == true) {
        let symbol = "+";
        let text = document.getElementById("output").innerHTML;
        let i = text.includes("+");
        if (i == false && text !== "") {
            document.getElementById("output").innerHTML += symbol;
        }
    }
}
function minus() {
    if (finder() == true) {
        let symbol = "-";
        let text = document.getElementById("output").innerHTML;
        let i = text.includes("-");
        if (i == false && text !== "") {
            document.getElementById("output").innerHTML += symbol;
        }
    }
}
function multiply() {
    if (finder() == true) {
        let symbol = "*";
        let text = document.getElementById("output").innerHTML;
        let i = text.includes("*");
        if (i == false && text !== "") {
            document.getElementById("output").innerHTML += symbol;
        }
    }
}
function divide() {
    if (finder() == true) {
        let symbol = "/";
        let text = document.getElementById("output").innerHTML;
        let i = text.includes("/");
        if (i == false && text !== "") {
            document.getElementById("output").innerHTML += symbol;
        }
    }
}

function equal() {
    let number = document.getElementById("output").innerHTML;
    if (number.includes("=")) {
        let i = number.indexOf("=");
        let change = number.substr(++i, 20);
        document.getElementById("output").innerHTML = change;
    } else {
        if (number.includes("+")) {
            document.getElementById("output").innerHTML += "=" + plusChecker();
        }
        else if (number.includes("-")) {
            document.getElementById("output").innerHTML += "=" + minusChecker();
        }
        else if (number.includes("*")) {
            document.getElementById("output").innerHTML += "=" + multiplyChecker();
        }
        else if (number.includes("/")) {
            document.getElementById("output").innerHTML += "=" + divideChecker();
        }
    }
}
function plusChecker() {
    let fp;
    let lp;
    let result;
    let i;
    let number = document.getElementById("output").innerHTML;
    i = number.indexOf("+");
    fp = number.substr(0, i);
    fp = Number(fp);
    lp = number.substr(++i, 15);
    lp = Number(lp);
    result = fp + lp;
    return result;
}
function minusChecker() {
    let fp;
    let lp;
    let result;
    let i;
    let number = document.getElementById("output").innerHTML;
    i = number.indexOf("-");
    fp = number.substr(0, i);
    fp = Number(fp);
    lp = number.substr(++i, 15);
    lp = Number(lp);
    result = fp - lp;
    return result;
}
function multiplyChecker() {
    let fp;
    let lp;
    let result;
    let i;
    let number = document.getElementById("output").innerHTML;
    i = number.indexOf("*");
    fp = number.substr(0, i);
    fp = Number(fp);
    lp = number.substr(++i, 15);
    lp = Number(lp);
    result = fp * lp;
    return result;
}
function divideChecker() {
    let fp;
    let lp;
    let result;
    let i;
    let number = document.getElementById("output").innerHTML;
    i = number.indexOf("/");
    fp = number.substr(0, i);
    fp = Number(fp);
    lp = number.substr(++i, 15);
    lp = Number(lp);
    result = fp / lp;
    return result;
}