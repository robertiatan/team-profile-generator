// Imports the employee constructor
const Employee = require("../lib/Employee");

// Test to create a new employee object
test("Employee object created", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});

// Test for setting name
test("Employee name set", () => {
  const name = "Robert";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

// Test for getName method
test("Employee name retrieved from getName", () => {
  const name = "Robert";
  const emp = new Employee(name);
  expect(emp.getName()).toBe(name);
});

// Test for setting email
test("Employee email set", () => {
  const email = "robertiatan@gmail.com";
  const emp = new Employee("Robert", 1, email);
  expect(emp.email).toBe(email);
});

// Test for getEmail method
test("Employee email retrieved from getEmail", () => {
  const email = "robertiatan@gmail.com";
  const emp = new Employee("Robert", 1, email);
  expect(emp.email).toBe(email);
});

// Test for setting id
test("Employee ID set", () => {
  const id = 1;
  const emp = new Employee("Robert", id);
  expect(emp.id).toBe(id);
});

// Test for getId method
test("Employee ID retrieved from getId", () => {
  const id = 1;
  const emp = new Employee("Robert", id);
  expect(emp.id).toBe(id);
});

// Test for getRole method
test("Employee role retrieved from getRole", () => {
  const role = "Employee";
  const emp = new Employee("Robert", 1, "robertiatan@gmail.com");
  expect(emp.getRole()).toBe(role);
});
