import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const newNumbers = numbers.map((number) => {
  return number * 2;
});
console.table(newNumbers);

//Filter - Create a new array by keeping the items that return true.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const filteredNumbers = numbers.filter((number) => {
  return number < 10;
});
console.table(filteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const newNumber = numbers.reduce((accumulator, number) => {
  console.log("accumulator = " + accumulator);
  console.log("number = " + number);
  return accumulator + number;
});
console.table(newNumber);

//Find - find the first item that matches from an array.
const findNumber = numbers.find((number) => {
  return number > 10;
});
console.log(findNumber);

//FindIndex - find the index of the first item that matches.
const findIndex = numbers.findIndex((number) => {
  return number === 48;
});
console.log(findIndex);

console.table(numbers);


console.table(emojipedia);

const meanings = emojipedia.map((item) => {
  return item.meaning.substring(0,100);
});
console.log(meanings);
