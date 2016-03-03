var answers = require("../questions");
var expect = require("chai").expect;

describe("#drop", function(){
  it("Creates a slice of array with n elements dropped from the beginning.", function(){
    expect(answers.drop([1,2,3,4],2)).to.eql([2,4]);
  });

  it("Returns a copy of the array if n is zero or less", function(){
    expect(answers.drop([1,2,3,4],-2)).to.eql([1,2,3,4]);
  });

  it("Returns an empty array if n is greater than the length of the array", function(){
    expect(answers.drop([1,2,3,4],12)).to.eql([]);
  });
});

describe("#join", function(){
  it("Converts all elements in array or string into a new string separated by separator.", function(){
    expect(answers.join("hello","zz")).to.eql("hzzezzlzzlzzo");
    expect(answers.join([1,2,3,4],"zz")).to.eql("1zz2zz3zz4zz");
  });
  it("Returns an empty string if the data type is an object, boolean, null or undefined", function(){
    [false, {}, null, undefined, [],""].forEach(function(val){
      expect(answers.join(val,"zz")).to.eql("");
    });
  });
});

describe("#pluck", function(){
  it("returns an array of values of a specific key", function(){
    var people = [
          {name : 'tom', age : 10},
          {name: 'jane', age: 20},
          {name : 'bob', age : 30}
        ];
  expect(answers.pluck(people, 'name')).to.eql(['tom', 'jane', 'bob']);
  });
});

describe("#repeat", function(){
  it("concatenates the given value with the number of times specificed in the second parameter", function(){
    expect(answers.repeat("hello",2)).to.equal("hellohello");
    expect(answers.repeat(false,2)).to.equal("falsefalse");
    expect(answers.repeat({},2)).to.equal("[Object object][Object object]");
  });
  it("returns an empty string if the number is 0 or less", function(){
    expect(answers.repeat(1,0)).to.equal("");
    expect(answers.repeat(1,-19)).to.equal("");
  });
});

describe("#containsMoreThanOne", function(){
  it("returns true if the value that is being searched for exists twice in an array or string", function(){
    expect(answers.containsMoreThanOne("hello","l")).to.equal(true);
    expect(answers.containsMoreThanOne([1,2,2,3],2)).to.equal(true);
    expect(answers.containsMoreThanOne(["f","f","hello"],"f")).to.equal(false);
    expect(answers.containsMoreThanOne(["hi","hey"],"h")).to.equal(false);
  });
});

describe("#letterCount", function(){
  it("returns the correct frequency of letters in a string", function(){
      expect(answers.letterCount("awesome")).to.deep.equal({
        a: 1,
        w: 1,
        e: 2,
        s: 1,
        m: 1,
        o: 1
       });
    });
});

describe("#flatten", function(){
  it("", function(){
    var sampleArray = [1,[2],[3],4];
    expect(answers.flatten(sampleArray)).to.eql([1,2,3,4]);
  });
});

describe("#flattenDeep", function(){
  it("", function(){
    var nestedArray = [[[[[[[[[[[[[[[[[[[[[[[[[[[[1, [2], [[[[3]]], [[[4]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];
    expect(answers.flatten(nestedArray)).to.eql([1,2,3,4]);
  });
});