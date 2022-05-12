//jshint esversion:6

// console.log(module);
// module.exports.getDate = getDate;

// function getDate(){
//^^^ Refactoring the code to be shorter (line 4 and 6)

// module.exports.getDate = function (){
// ^^^ shortening
   exports.getDate = function (){


  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  // let day = today.toLocaleDateString("en-US", options);
  // return day;
  //^^^ Refactoring the code to be shorter
  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function(){

  const today = new Date();
  const options = {
    weekday: 'long',
  };

  // let day = today.toLocaleDateString("en-US", options);
  // return day;
  //^^^ Refactoring the code to be shorter
  return today.toLocaleDateString("en-US", options);
};

console.log(module.exports);
