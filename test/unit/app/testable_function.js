'use strict';

module.exports = {
    getPets: (people, pets) => {
        if (!Array.isArray(people)) {
            throw new Error('people or existingPets is not an array');
        }
        pets = Array.isArray(pets) ? pets.slice(0) : [];

        people.slice(0).forEach((person) => {
            if (person.dog && person.dog.name) {
                pets.push(person.dog);
            }
            if (person.cat && person.cat.name) {
                pets.push(person.cat);
            }
        });
        return pets;
    }
};