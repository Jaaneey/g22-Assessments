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

  // fill in this array with all of the primitive types in JavaScript make these are ALL a string (there are 5 we are looking for)
  allPrimitiveDataTypes: [],

  // fill in all the falsey values in this array (there are 6 - we'll even give you one!)
  allFalseyValues: ["NaN"],

  // fill in four common JS Errors we learned about in class
  fourCommonJSErrors: [],

  // Fix this broken function

  add: function(a,b){
    a + b;
  },

  // fix this broken code
  sumFromZeroToFive: function(){
    var count =0;
    for(var i=0; i > 5; i++){
      count += i;
    }
    return count;
  },
  // fix this broken code
  simpleComparison: function(a,b){
    if (a=b) {
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

  },

  // Write the code necessary to return the total number of favorite topics in the nested data structure
  returnAllFavoriteTopics: function(){

  },

  // Write a function that accepts as arguments the name of an instructor and a favorite topic and adds that favorite topic to the instructor's favTopic array. This function should return that instructors favTopic array with the new favTopic. Do NOT worry about duplicates!

  addFavoriteTopic: function(){

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

};



