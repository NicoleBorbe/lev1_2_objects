
let person = {
    namen: "Hans Peter",
    alter: 88,
    sagNameAlter: function () {
        alert(this.namen + ", " + this.alter);
    },
};

console.log(person.namen);
console.log(person.alter);

person.sagNameAlter();