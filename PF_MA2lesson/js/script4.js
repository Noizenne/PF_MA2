// Question 1

function logString() {
    console.log("What the func is this nonsense?");
}

logString();

// Question 2

function logName(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log(fullName);
}

logName("Karla", "Rabe");

// Question 3

function multiply(firstNumber, secondNumber) {

    var typeOfFirst = typeof firstNumber;
    var typeOfSecond = typeof secondNumber;

    if (typeOfFirst !== "number" || typeOfSecond !== "number") {
        return "Please supply number values."
    }
   
    return firstNumber * secondNumber;

}

var result = multiply(6, 2);
console.log(result)


// Question 4

function addition(num1, num2, num3) {

    var convertNr1 = parseFloat(num1);
    var convertNr2 = parseFloat(num2);
    var convertNr3 = parseFloat(num3);

    if (isNaN(convertNr1) || isNaN(convertNr1) || isNaN(convertNr1)) {

        return "Invalid argument types";

    }

    return convertNr1 + convertNr2 + convertNr3;
}
    
    var paragraph = document.querySelector("p");

    var sum = addition(2, 4, 2);

    paragraph.innerHTML = sum;


// Question 5

var buttonHeading = document.querySelector(".heading");

buttonHeading.onclick = function () {
    var heading = document.querySelector("h1");
    heading.innerHTML += " :Updated";
};

// Question 6

var buttonTitle = document.querySelector(".title");

function changeTitle() {
    document.title = "I've been updated";
}

buttonTitle.onclick = changeTitle;

// Question 7

var redButton = document.querySelector(".red");
var orangeButton = document.querySelector(".orange");
var pinkButton = document.querySelector(".pink");

function changeColour(colour) {

    document.body.style.backgroundColor = colour;

}

redButton.onclick = function() {
    changeColour ("red");
};

orangeButton.onclick = function() {
    changeColour ("orange");
};

pinkButton.onclick = function() {
    changeColour ("pink");
};