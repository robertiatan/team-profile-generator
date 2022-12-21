// Imports the manager constructor
const Manager = require("../lib/Manager");

// Returns the manager object
test("Manager object created", () => {
  const manag = new Manager();
  expect(typeof manag).toBe("object");
});

// Test for setting office number
test("Manager office number set", () => {
  const officeNumber = 13;
  const manag = new Manager(
    "Robert",
    1,
    "robertiatan@gmail.com",
    officeNumber
  );
  expect(manag.officeNumber).toBe(officeNumber);
});

// getOfficeNumber method test
test("getOfficeNumber method works correctly", () => {
  const officeNumber = 13;
  const manag = new Manager(
    "Robert",
    1,
    "robertiatan@gmail.com",
    officeNumber
  );
  expect(manag.getOfficeNumber()).toBe(officeNumber);
});

// getRole method test
test("Role method works correctly", () => {
  const role = "Manager";
  const manag = new Manager("Robert", 1, "robertiatan@gmail.com", 13);
  expect(manag.getRole()).toBe(role);
});
