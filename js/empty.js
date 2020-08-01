//segédfüggvények

function $(selector) {
    return document.querySelector(selector);
}

function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}

//függvények
let ShowBtn = showBtn();
function showBtn() {
    let newDiv = createAnyElement("div", { class: "container" });
    let newButton = createAnyElement("button", { type: "button", class: "btn btn-block btn-success" });
    newButton.addEventListener("click", calcNumber);
    newButton.innerHTML = "Számol";
    let delButton = createAnyElement("button", { type: "reset", class: "btn btn-block btn-danger" });
    delButton.addEventListener("click", () => { $(".show-biggest").innerHTML = ""; });
    delButton.innerHTML = "Újra";
    $(".col-6").appendChild(newDiv);
    newDiv.appendChild(newButton);
    newDiv.appendChild(delButton);
}


function calcNumber() {
    let szamok = document.querySelectorAll("[name^='szam']");
    let b = 0; let s = 0;
    let arr = new Array();
    for (i = 0; i < szamok.length; i++) {
        if (szamok[i].value == "" || isNaN(szamok[i].value)) {
            szamok[i].value = null;
            szamok[i].placeholder = "Ide még nem írtál számot!";
            return;
        } else {
            s++;
            b = parseInt(szamok[i].value);
            arr[i] = b++;
            szamok[i].placeholder = "";
    }
}
    let Biggest = biggestValue(arr);
}

function biggestValue(arr) {
    let biggest = 0;
    for (let k in arr) {
        if (arr[k] > biggest) {
            biggest = arr[k];
        }
    }
    $(".show-biggest").innerHTML = biggest;
}













