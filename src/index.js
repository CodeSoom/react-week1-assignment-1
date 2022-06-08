/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
"use strict";

console.log("Hello, World!");



const { isValueObject } = require("immutable");


/* @jsx createElement */
const element = (
  <div>Hello, World!</div>
);

document.getElementById("hello").appendChild(element);


// React is not defined
//  let count = [
//   value:0
// ];

// function handleClick() {
//   count.value = count.value + 1;
//   render();
// }

// function render() {
//   const element = /*#__PURE__*/React.createElement("div", {
//     id: "hello",
//     className: "greeting"
//   }, /*#__PURE__*/React.createElement("p", null, "Hello, world!"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
//     type: "button",
//     onClick: handleClick
//   }, "Click me! (", count, ")")));
//   document.getElementById('app').textContent = '';
//   document.getElementById('app').appendChild(element);
// }

// render();