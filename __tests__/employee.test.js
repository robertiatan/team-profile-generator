// Imports the employee constructor
const Employee = require("../lib/Employee");

// Test to create a new employee object
test("Employee object created", () => {
  const employee = new Employee("Robert", 01, "robertiatan@gmail.com");

  expect(employee.name).toEqual("Robert");
  expect(employee.email).toEqual("robertiatan@gmail.com");
  expect(employee.id).toEqual(01);
});

// Test for getName method
test("Employee name retrieved from getName", () => {
  const employee = new Employee("Robert", 01, "robertiatan@gmail.com");
  expect(employee.getName).toEqual("Robert");
});

// Test for getEmail method
test("Employee email retrieved from getEmail", () => {
  const employee = new Employee("Robert", 01, "robertiatan@gmail.com");
  expect(employee.getEmail).toEqual("robertiatan@gmail.com");
});

// Test for getId method
test("Employee ID retrieved from getId", () => {
  const employee = new Employee("Robert", 01, "robertiatan@gmail.com");
  expect(employee.getId).toEqual(01);
});

// Test for getRole method
test("Employee role retrieved from getRole", () => {
  const role = "Employee";
  expect(role.getRole).toEqual("Employee");
});
