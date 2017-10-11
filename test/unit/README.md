## Prompt that you will be creating the tests for!

Create a function called getPets that takes an array of people objects, and adds their dogs or cats if they have names to an array. Should also be able to take in an existing array of pets and add the new pets to them. If a person does not have a dog or cat, the value will be null.

```js
// people schema:
{
    name: 'John Jacobs',
    age: '32',
    dog: {...},
    cat: null
}

// dog or cat schema
cat: {
    name: 'Fuzzball',
    breed: 'Siamese',
    age: 8
}
```

## What you'll be doing:
Two mock apps each with a function have been created. One is the happy path app and function, where everything should be fine #rainbows! The other is a testable function that is more modular and a bit more robust. Check out the function you'll be testing `app/testable_function.js` and take a look at the data the function is expected to handle above ( or in `data/index.js`). With a little bit of research on [chai](http://chaijs.com/) and [mocha](https://mochajs.org/), you should be good to start writting unit tests in `tests/tested_app.test.js`.

You're meant to use the testable functon, and work making tests for a function that should pass all of them. However, you can also get the full experience of testing and refactoring by using the happy path function in your tests.

The *tests_answers* directory contains code to test both the happy path function and the testable function. You can run `npm run test` to see how your tests hold up or `npm run answers` to see the test results the answers produce for the happy path and testable functions.

React and Angular testing is not included in this practice repo

## Some ideas of what we should test our getPets on

* getPets should be a function
* getPets should throw without people argument
* getPets should return an array
* getPets should return an array with no items if nothing is passed in
* getPets should handle bad data
* getPets should handle people without pets
* getPets should add new pets to existing pet array
* getPets should not mutate passed arrays
* getPets should handle pets without names and not add entries
* getPets should handle badly formatted pets and not add entries
* getPets should handle badly formated people and not add entries
* getPets should keep existing pets in result array
* getPets should handle when existing pets aren't passed in
* getPets should handle when bad existing pets are passed in and still add entries