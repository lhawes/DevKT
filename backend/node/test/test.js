"use strict";

const expect = require("chai").expect;
const describe = require("mocha").describe;
const it = require("mocha").it;
const after = require("mocha").after;
const before = require("mocha").before;

const app = require("../app.js");
const integration = require("mocha-axios");
const data = require("../db/data");

describe("Animal", function () {
    it("GET welcome message json", integration({
        app,
        req: {
            method: "GET",
            url: "/",
        },
        res: {
            status: 200,
            data: {
                "message": "welcome to node"
            }
        },
    }));

    it("GET all /animal", integration({
        app,
        req: {
            method: "GET",
            url: "/animal",
        },
        res: {
            status: 200,
            json: data
        },
    }));

    it("GET all /animals", integration({
        app,
        req: {
            method: "GET",
            url: "/animals",
        },
        res: {
            status: 200,
            json: data
        },
    }));

    const lobsterData = {color: "red"};
    it("PUT lobster into /animal", integration({
        app,
        req: {
            method: "PUT",
            url: "/animal/lobster",
            body: lobsterData
        },
        res: {
            status: 201
        },
    }));

    it("GET lobster from /animal", integration({
        app,
        req: {
            method: "GET",
            url: "/animal/lobster",
        },
        res: {
            status: 204,
            json: lobsterData
        },
    }));

    it("DELETE lobster from /animal", integration({
        app,
        req: {
            method: "DELETE",
            url: "/animal/lobster",
        },
        res: {
            status: 202
        },
    }));

    it("GET antelope from /animal failure", integration({
        app,
        req: {
            method: "GET",
            url: "/animal/antelope",
        },
        res: {
            status: 204
        },
    }));

    it("POST several animals to /animal", integration({
        app,
        req: {
            method: "POST",
            url: "/animal/",
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache",
            },
            body: JSON.stringify({
                "animals":[{
                    "name": "apple",
                    "data": {
                        "color": "red"
                    }
                },
                {
                    "name": "pear",
                    "data": {
                        "color": "yellow"
                    }
                }]
            })
        },
        res: {
            status: 200,
            data: {
                "A":"bone"
            }
        },
    }));

    it("GET apple from /animal", integration({
        app,
        req: {
            method: "GET",
            url: "/animal/apple",
        },
        res: {
            status: 200,
            json: {
                "color": "red"
            }
        },
    }));

    it("GET pear from /animal", integration({
        app,
        req: {
            method: "GET",
            url: "/animal/pear",
        },
        res: {
            status: 200,
            json: {
                "color": "yellow"
            }
        },
    }));

});