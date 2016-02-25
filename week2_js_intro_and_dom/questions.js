// IGNORE THIS!!
var classroom = {
    instructors: [
      {
        name: "Parker",
        favTopic: ["hoisting", "merge conflicts"]
      },
      {
        name: "Janey",
        favTopic: ["angular", "hoisting"]
      },
      {
        name: "Elie",
        favTopic: ["jQuery", "Node"]
      },
      {
        name: "Matt",
        favTopic: ["DOM", "Math"]
      },
      {
        name: "Tim",
        favTopic: ["Computer Science", "Databases"]
      },
    ]
  };

module.exports = {

  // fill in this array with all of the primitive types in JavaScript make these ALL a string (there are 5 we are looking for - Symbol is not one of them!)
  allPrimitiveDataTypes: ["Boolean", "number", "null", "undefined", "string"],

  // fill in all the falsey values in this array (we gave you one to start!)
  allFalseyValues: ["NaN","",false,undefined,null,0],

  // fill in four common JS Errors we learned about in class
  fourCommonJSErrors: ["SyntaxError", "ReferenceError", "TypeError", "RangeError"],

  // Fix this broken function

  add: function(a,b){
    return a + b;
  },

  // fix this broken code
  sumFromZeroToFive: function(){
    var count =0;
    for(var i=0; i < 5; i++){
      count += i;
    }
    return count;
  },
  // fix this broken code
  simpleComparison: function(a,b){
    if (a===b) {
      return true;
    }
  },

  // Nested Data Structures

  // classroom: {
  //   instructors: [
  //   {
  //     name: "Parker",
  //     favTopic: ["hoisting", "merge conflicts"]
  //   },
  //   {
  //     name: "Janey",
  //     favTopic: ["angular", "hoisting"]
  //   },
  //   {
  //     name: "Elie",
  //     favTopic: ["jQuery", "Node"]
  //   },
  //   {
  //     name: "Matt",
  //     favTopic: ["DOM", "Math"]
  //   },
  //   {
  //     name: "Tim",
  //     favTopic: ["Computer Science", "Databases"]
  //   },
  //   ]
  // },

  // write a function that returns an array of all the names of the instructors in the classroom
  returnAllNames: function(){
    var names = [];

    for(var i = 0; i < classroom.instructors.length; i++) {
      names.push(classroom.instructors[i].name);
    }

    return names;

  },

  // Write the code necessary to return the total number of favorite topics in the nested data structure
  returnAllFavoriteTopics: function(){
    var counter = 0;
    for(var i = 0; i < classroom.instructors.length; i++){
      for(var j = 0; j < classroom.instructors[i].favTopic.length; j++) {
        counter++;
      }
    }
    return counter;
  },

  // Write a function that accepts as arguments the name of an instructor and a favorite topic and adds that favorite topic to the instructor's favTopic array. This function should return that instructors favTopic array with the new favTopic. Do NOT worry about duplicates!

  addFavoriteTopic: function(instructor, newFavTopic){
    // classroom.instructors[instructors]
    for(var i = 0; i < classroom.instructors.length; i++) {
      if(classroom.instructors[i].name === instructor) {
        classroom.instructors[i].favTopic.push(newFavTopic);
        return classroom.instructors[i].favTopic;
      }
    }



  },

  // Write a function called letterCount (it must be called this for testing purposes), that accepts a string as its only argument and returns an object with the keys being the letter and the values the frequency of that letter.

  // For example letterCount("hello") returns
  // {
      // h: 1
      // e: 1
      // l: 2
      // o: 1
  // }
  // The order that these keys are returned in does NOT matter!
  
  letterCount: function(word){
    var answer = {};
    for(var i=0; i<word.length;i++){
      if(answer[word[i]]){
        answer[word[i]]++;
      }
      else {
        answer[word[i]] =1;
      }
    }
    return answer;
  }
};



