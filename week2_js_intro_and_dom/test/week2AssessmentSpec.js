var expect = require("chai").expect;
var questions = require("../questions");

describe("allPrimitiveDataTypes", function(){
  it("includes all the primitive data types in JavaScript", function(){
    // this next line just takes your answer and returns a new array with everything to lowerCase
    var primitives = questions.allPrimitiveDataTypes.map(v => v.toLowerCase());
    expect(primitives).to.have.members(["null", "undefined", "string", "boolean", "number"]);
  });
});

describe("allFalseyValues", function(){
  it("includes all the falsey values in JavaScript", function(){
    expect(questions.allFalseyValues).to.have.members(["",null,false,0,undefined,"NaN"]);
  });
});

describe("fourCommonJSErrors", function(){
  it("includes four common JS Errors ", function(){
    // this next line just takes your answer and returns a new array with everything to lowerCase
    var errors = questions.fourCommonJSErrors.map(v => v.toLowerCase());
    expect(errors).to.have.members(["rangeerror", "typeerror", "syntaxerror", "referenceerror"]);
  });
});

describe("#add", function(){
  it("returns the sum of two arguments", function(){
    expect(questions.add(2,3)).to.equal(5);
  });
});

describe("#sumFromZeroToFive", function(){
  it("adds all numbers from 0 to 5", function(){
    expect(questions.sumFromZeroToFive()).to.equal(10);
  });
});

describe("#simpleComparison", function(){
  it("returns undefined if both arguments are of different type", function(){
    expect(questions.simpleComparison(2,"2")).to.be.undefined;
  });
  it("returns true if both arguments are of the same type", function(){
    expect(questions.simpleComparison(2,2)).to.be.true;
  
  });
});

describe("#returnAllNames", function(){
  it("returns all names of instructors in an array", function(){
    var names = questions.returnAllNames().map(v => v.toLowerCase());
    expect(names).to.have.members(["parker", "elie", "janey", "matt", "tim"]);
  });
});

describe("#returnAllFavoriteTopics", function(){
  it("returns the number of favorite topics of all instructors", function(){
    expect(questions.returnAllFavoriteTopics()).to.equal(10);
  });
});

describe("#addFavoriteTopic", function(){
  it("return an array with the given favorite topic of the given instructor added", function(){
    expect(questions.addFavoriteTopic("Tim", "sailing")).to.deep.equal(["Computer Science", "Databases", "sailing"]);
  });
});

describe("#letterCount", function(){
  it("returns the correct frequency of letters in a string", function(){
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
