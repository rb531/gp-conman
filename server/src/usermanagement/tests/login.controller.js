const chai = require("chai");
const expect = chai.expect;

var loginController = require('../controllers/login.controller');

describe("login tests", () => {
  describe("happy path test cases", () => {
    it("signin test", (done) => {
        let req = {

        };
        let res = {

        };
        loginController.signin(req, res);

        expect(res.statusCode).to.equal(undefined);
        done();
    });
  });
});
