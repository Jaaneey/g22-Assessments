var expect = require("chai").expect;
var questions = require("../questions");

describe("Student answers", function(){
  describe("#letterCount", function(){
    it("It should return the correct result", function(){
      expect(questions.letterCount("awesome")).to.deep.equal({
        a: 1,
        w: 1,
        e: 2,
        s: 1,
        m: 1,
        o: 1
       });
    });
  });

});