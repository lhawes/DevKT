'use strict';

const data = require('../db/data.json');

module.exports = {};

// module.exports.delete = function (data, name) {
//     console.log('data[name]',  data[name]);
//     if (data[name]) {
//         delete data[name];
//         return true;
//     } else {
//         return false;
//     }
// };

module.exports.put =  function (data, animalName, animal) {
    data[animalName] = animal;
    return true;
};

module.exports.post = function () {

};