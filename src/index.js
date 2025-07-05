import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

var newNumbers = numbers.map(function (x) {
  return x * x;
});
// we can do like this if only one param in input
var newNumbers = numbers.map((x) => x * x); // arrow function name(params) {

var newNumbers = numbers.map((x, y) => {
  return x * x;
});

var newNumbers = numbers.map((x) => {
  return x * x;
});

////Map -Create a new array by doing something with each item in an array.
const nnewNumbers = numbers.map((x) => x * 2);

//////Filter - Create a new array by keeping the items that return true.
const nnnewNumbers = numbers.filter((x) => x > 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
const nnnnewNumbers = numbers.reduce((x, y) => {
  return x + y;
});
////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
const n = numbers.find((x) => x > 10);
////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

const nn = numbers.findIndex((x) => x > 10);
