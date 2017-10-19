"use strict";

const expect = require("chai").expect;
const describe = require("mocha").describe;
const it = require("mocha").it;

const data = require("../db/data");

const request = require('supertest');
const app = require('../app.js');


describe("/", function () {
    it('should return the welcome json', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.body).to.be.deep.equal({"message": "welcome to node"});
                done();
            });
    });
    it('should serve the test page', (done) => {
        request(app)
            .get('/testpage.html')
            .expect('Content-Type', 'text/html; charset=UTF-8')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                expect(true).to.be.true;
                done();
            });
    });
});
describe('/animal', function () {
    it('should GET all animals in the database', (done) => {
        request(app)
            .get('/animal/')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.body).to.be.deep.equal(data);
                done();
            });
    });
    describe('/animal/(option)', function () {

        const testname = 'lobster';
        const testdata = {"color": "red"};
        it('should PUT a new animal into data', (done) => {
            request(app)
                .put('/animal/' + testname)
                .send({data: testdata})
                .expect(201, done)
        });
        it('shouldn\'t PUT an existing animal into data', (done) => {
            request(app)
                .put('/animal/' + testname)
                .send({data: testdata})
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    expect(res.text).to.be.equal('animal ' + testname + ' already exists');
                    done();
                });
        });
        it('should GET animal that was PUT into data', (done) => {
            request(app)
                .get('/animal/' + testname)
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    expect(res.body).to.be.deep.equal(testdata);
                    done();
                });
        });
        it('should POST an update for an existing animal in data', (done) => {
            request(app)
                .post('/animal/' + testname)
                .send({data: {"color": "green"}})
                .expect(200)
                .expect('Content-Type', 'text/html; charset=utf-8')
                .end(function(err, res) {
                    if (err) return done(err);
                    expect(res.text).to.be.equal('updated ' + testname);
                    done();
                });
        });
        it('should DELETE an existing animal in data', (done) => {
            request(app)
                .delete('/animal/' + testname)
                .expect(202, done);
        });
        it('shouldn\'t DELETE a animal not in data', (done) => {
            request(app)
                .delete('/animal/' + testname)
                .expect(200)
                .expect('Content-Type', 'text/html; charset=utf-8')
                .end(function(err, res) {
                    if (err) return done(err);
                    expect(res.text).to.be.equal('no animal ' + testname + ' to delete');
                    done();
                });
        });
        it('shouldn\'t GET an animal that is not in data', (done) => {
            request(app)
                .get('/animal/' + testname)
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    expect(res.text).to.be.equal('no animal ' + testname + ' to get');
                    done();
                });
        });
        it('shouldn\'t POST an update for an existing animal in data', (done) => {
            request(app)
                .post('/animal/' + testname)
                .send({data: {"color": "brown"}})
                .expect(200)
                .expect('Content-Type', 'text/html; charset=utf-8')
                .end(function(err, res) {
                    if (err) return done(err);
                    expect(res.text).to.be.equal('no animal ' + testname + ' to update');
                    done();
                });
        });
    });
});