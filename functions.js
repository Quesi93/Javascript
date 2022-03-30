// Functions
function addNumbers(number1, number2) {
    var addition = number1 + number2;
    return addition;
}

var result1 = addNumbers(10, 10);
var result2 = addNumbers(7, 3);

console.log(result1);
console.log(result2);

var person = {
    name: "Quesi"
}
console.log(Object.values(person));
console.log(Object.keys(person));

console.log("Quesi".toUpperCase());
console.log("Quesi".toLocaleLowerCase());
console.log("Quesi".indexOf("i"));