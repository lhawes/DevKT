# Node Express API Practice
Use this repo to build an API with Node and express that manages a database of animals and their properties.

### Setup
```sh
npm install

# to serve run
npm run start

# to run tests
npm run test

```

### Pages
| Page   |      url      |  Active |
|----------|-------------|------|
| Welcome page |  localhost:3000/ | True |
| Test API page | localhost:3000/testpage.html   |   False |
| Test redirect | localhost:3000/test   |   False |


### Specs for the API
This API will use Node, ExpressJS and REST to interact with a non-persistent database. The API should be able to insert an entry, update and entry, delete and entry, get all entries, and get a specified entry. The delete, update, and insert methods should be idempotent. Idempotency means that the action will only have an affect the first time. Ex:
```js
var a = {color:"blue"};

// idempotent
a.color = "red"; // color is now red
a.color = "red"; // no matter how many times you run the line, color will always be 'red'

// non idempotent
a.color += 'a'; // every time this is done, the output will change
```

| url | method | action | idempotent |
|---|---|---|---|
| /animal/        | GET | Retrieve all animals from db  | False  |
| /animal/(name)  | GET | Retrieve the specified animal from db  | True  |
| /animal/(name)  | DELETE | Delete the specified animal from db  | True  |
| /animal/(name)  | PUT | Insert the specified animal from db  | True  |
| /animal/(name)  | POST | Update the specified animal from db  | True  |


### Objectives
- Serve the public directory statically to get the test page
- Setup /test to redirect with a 301 to /testpage.html
- Hook up the routing for animals
- Build out the API
- Make all tests pass
