'use strict';

const chai = require('chai');
const mocha = require('mocha');
const expect = chai.expect;
const describe = mocha.describe;
const it = mocha.it;

const data = require('../data');
const getPets = function (people, pets) {
    people.forEach((person) => {
        if (person.dog !== null) {
            pets.push(person.dog);
        }
        if (person.cat !== null) {
            pets.push(person.cat);
        }
    });
    return pets;
};

describe('Our App', () => {
    describe('getPets happy path function', () => {
        it('should be a function', () => {
            expect(getPets).to.be.an('function');
        });

        it('should throw without people argument', () => {
           expect(getPets).to.throw();
        });

        it('should return an array', () => {
            const result = getPets(data, []);
            expect(result).to.be.an('array');
        });

        it('should return an array with no items if nothing is passed in', () => {
            const result = getPets([], []);
            expect(result.length).to.be.equal(0);
        });

        it('should handle bad data', () => {
            const badData = 'not an array of people objects';
            const wrapper = () => getPets(badData, []);
            expect(wrapper).to.throw();
        });

        it('should add new pets to existing pet array', () => {
            const newPets = [{
                dog: {
                    name: 'A',
                    breed: 'Y',
                    age: 0
                }
            }];
            const existingPets = [{
                name: 'B',
                breed: 'Z',
                age: 1
            }];
            const result = getPets(newPets, existingPets);
            expect(result).to.be.deep.equal([existingPets[0], newPets[0].dog]);
            expect(result.length).to.be.equal(2);
        });

        it('should not mutate passed arrays', () => {
            const newPets = [{
                dog: {
                    name: 'A',
                    breed: 'Y',
                    age: 0
                }
            }];
            const existingPets = [{
                name: 'B',
                breed: 'Z',
                age: 1
            }];
            const origNewPets = newPets.slice(0);
            const origExistingPets = existingPets.slice(0);
            const wrapper = () => getPets(newPets, existingPets);
            expect(wrapper).to.not.throw();
            const result = wrapper();
            expect(result.length).to.be.equal(2);
            expect(result).to.be.deep.equal([origExistingPets[0], origNewPets[0].dog]);
        });


        it('should handle pets without names and not add entries', () => {
            const namelessPets = [{
                name: 'John Jacobs',
                age: '32',
                dog: {
                    name: null,
                    breed: 'Lab',
                    age: 3
                },
                cat: {
                    name: null,
                    breed: 'Siamese',
                    age: 8
                }
            }];
            const wrapper = () => getPets(namelessPets, []);
            expect(wrapper).to.not.throw();
            const result = wrapper();
            expect(result.length).to.be.equal(0);
        });

        it('should handle badly formatted pets and not add entries', () => {
            const badFormatPets = [{
                name: 'John Jacobs',
                age: '32',
                dog: ['fred', 'fred2'],
                cat: 'null'
            }];
            const wrapper = () => getPets(badFormatPets, []);
            expect(wrapper).to.not.throw();
            const result = wrapper();
            expect(result.length).to.be.equal(0);
        });

        it('should handle badly formated people and not add entries', () => {
            const badPeopleFormat = ['greg', 12, {age:12}];
            const wrapper = () => getPets(badPeopleFormat, []);
            expect(wrapper).to.not.throw();
            const result = wrapper();
            expect(result.length).to.be.equal(0);
        });

        it('should keep existing pets in result array', () => {
            const existingPets = [{
                name: 'A',
                breed: 'X',
                age: 0
            },{
                name: 'B',
                breed: 'Y',
                age: 1
            },{
                name: 'C',
                breed: 'Z',
                age: 2
            }];
            const wrapper = () => getPets([], existingPets);
            expect(wrapper).to.not.throw();
            const result = wrapper();
            expect(result).to.deep.equal(existingPets);
        });

        it('should handle when existing pets aren\'t passed in', () => {
            const result = getPets(data);
            expect(result.length).to.be.equal(3);
        });

        it('should handle when bad existing pets are passed in and still add entries', () => {
            const wrapper = () => getPets(data, {a: 'problem'});
            expect(wrapper).to.not.throw();
            const result = wrapper();
            expect(result).to.be.an('array');
            expect(result.length).to.be.equal(3);
        });
    });
});
