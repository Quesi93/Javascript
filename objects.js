// Objects
var person = {
    firstName: "Quesi",
    age: 25,
    isMale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "Kumasi",
        postCode: "SF2"
    }
};
console.log(person.firstName);
console.log(person.age);
console.log(person.balance);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person))