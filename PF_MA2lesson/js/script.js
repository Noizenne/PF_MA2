//Question 1

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if ((requiredName.toLowerCase()) === (suppliedName.toLowerCase())) {
    console.log("The strings are equal.")
}
else {
    console.log("The strings are NOT equal.")
}

//Question 2

var username = "myusername";
var min = 4;
var max = 10;

if (username.length >= min && username.length<= max) {
    console.log("Acceptable username.")
}
else {
    if (username.length < 4) {
        console.log("Too few characters.")
    }

    if (username.length > 10) {
        console.log("Too many characters.")
    }
}

//Question 3

//Criteria:
//The invoice must be paid
//The product must have been dispatched
//The customer must have signed for the delivery

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = true;

if ((invoicePaid === true) && (productDispatched === true) && (customerHasSigned === true)) {
    console.log("Order complete.")
}
else {
    if (invoicePaid !== true) {
        console.log("The invoice have NOT been paid.")
    }

    if (productDispatched !== true) {
        console.log("The product have NOT been dispatched.")
    }

    if (customerHasSigned !== true) {
        console.log("The customer has NOT signed.")
    }
}

//Question 4

if ((invoicePaid !== true) || (productDispatched !== true) || (customerHasSigned !== true)) {
    if (invoicePaid === false) {
        console.log("The invoice have NOT been paid.")
    }

    if (productDispatched === false) {
        console.log("The product have NOT been dispatched.")
    }

    if (customerHasSigned === false) {
        console.log("The customer has NOT signed.")
    }
}
else {
    console.log("Order conplete")
}
