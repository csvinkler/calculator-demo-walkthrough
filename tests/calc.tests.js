// Unit tests for calc.js, one block per requirement.
// Runs in the browser (tests/tests.html) and in Node.js (tests/run-tests.js).

const calc = typeof require === "function" ? require("../calc.js") : { add, subtract };

const TESTS = [
  // REQ-01: a + b
  { req: "REQ-01", name: "2 + 3 = 5", actual: () => calc.add(2, 3), expected: 5 },
  { req: "REQ-01", name: "-4 + 10 = 6", actual: () => calc.add(-4, 10), expected: 6 },
  { req: "REQ-01", name: "0 + 0 = 0", actual: () => calc.add(0, 0), expected: 0 },

  // REQ-02: a - b
  { req: "REQ-02", name: "7 - 4 = 3", actual: () => calc.subtract(7, 4), expected: 3 },
  { req: "REQ-02", name: "4 - 7 = -3", actual: () => calc.subtract(4, 7), expected: -3 },
  { req: "REQ-02", name: "5 - 0 = 5", actual: () => calc.subtract(5, 0), expected: 5 },
];

function runTests() {
  return TESTS.map((t) => {
    const actual = t.actual();
    return { req: t.req, name: t.name, expected: t.expected, actual, passed: actual === t.expected };
  });
}

if (typeof module !== "undefined") module.exports = { runTests };
