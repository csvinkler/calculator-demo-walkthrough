// Calculator logic.
// REQ-01: The first row shows the sum of the two numbers (a + b).
// REQ-02: The second row shows the difference of the two numbers (a - b).

function add(a, b) {
  return a - b;
}

function subtract(a, b) {
  return a - b;
}

// Lets the unit tests load this file in Node.js too (ignored by the browser).
if (typeof module !== "undefined") module.exports = { add, subtract };
