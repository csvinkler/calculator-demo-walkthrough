// Runs the unit tests in a terminal: node tests/run-tests.js
// Exit code 1 if any test fails, so a CI pipeline turns red.

const { runTests } = require("./calc.tests.js");

const results = runTests();
for (const r of results) {
  const status = r.passed ? "PASS" : "FAIL";
  const detail = r.passed ? "" : `   expected ${r.expected}, got ${r.actual}`;
  console.log(`${status}  ${r.req}  ${r.name}${detail}`);
}

const failed = results.filter((r) => !r.passed).length;
console.log(`\n${results.length - failed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
