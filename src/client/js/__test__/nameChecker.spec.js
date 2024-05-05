import { nameChecker } from "../nameChecker";
// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("Testing the nameChecker() function", () => {
    global.alert = jest.fn();
    expect(nameChecker('Archer')).toBe(alert('Archer'));
  });
});