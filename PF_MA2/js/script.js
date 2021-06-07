// Question 1

var pets = [
    {
        type: "cat",
        age: 5.5,
    },
    {
        type: "dog",
        age: 3.8,
    },
    {
        type: "parrot",
        age: 4.0,
    }
];

for (var i = 0; i < pets.length; i++) {
    var typeOfPet = pets[i].type;
    var age = pets[i].age;

    if (age <= 4) {
        console.log(typeOfPet + " " + age)
    }
}

// Question 2

function isBoolean (value) {

    var typeOfValue = typeof value;

    if (typeOfValue !== "boolean") {

    return ("Please pass a boolean value in.");
}

return (value)

}

var result = isBoolean(true);
console.log(result);

// Question 3

var buttonHeading = document.querySelector("button");
var changeSubHeading = document.querySelector("h2");

function changeColour(colour) {

    document.getElementById("sub").style.color = colour;

}

buttonHeading.onclick = function() {
    
    changeSubHeading.innerHTML = "Updated subheading";
    changeColour("blue");
    
};


