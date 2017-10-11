'use strict';

const owners = require('../data');
const oldPets = [{
    name: 'Alexander',
    breed: 'Persian',
    age: 4
}];

function getPets (people, pets) {

    people.forEach((person) => {
        if (person.dog === null) {
            pets.push(person.dog);
        }
        if (person.cat === null) {
            pets.push(person.cat);
        }
    });
    return pets;
}

console.log(getPets(owners, oldPets));