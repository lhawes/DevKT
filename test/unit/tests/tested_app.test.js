'use strict';

const chai = require('chai');
const mocha = require('mocha');
const expect = chai.expect;
const describe = mocha.describe;
const it = mocha.it;

const data = require('../data');
const getPets = require('../app/testable_function').getPets;

describe('Our App', () => {
    describe('getPets function', () => {
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
            expect('test').to.be.equal('done');
        });


        it('should handle pets without names and not add entries', () => {
            expect('test').to.be.equal('done');
        });

        it('should handle badly formatted pets and not add entries', () => {
            expect('test').to.be.equal('done');
        });

        it('should handle badly formated people and not add entries', () => {
            expect('test').to.be.equal('done');
        });

        it('should keep existing pets in result array', () => {
            expect('test').to.be.equal('done');
        });

        it('should handle when existing pets aren\'t passed in', () => {
            expect('test').to.be.equal('done');
        });

        it('should handle when bad existing pets are passed in and still add entries', () => {
            expect('test').to.be.equal('done');
        });
    });
});
