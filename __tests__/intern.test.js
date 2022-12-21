// Imports the intern constructor
const Intern = require("../lib/Intern");

// Returns the intern object
test("Intern object created", () => {
  const int = new Intern();
  expect(typeof int).toBe("object");
});

// Test for setting school
test("Intern school set", () => {
  const school = "UofT";
  const int = new Intern("Robert", 1, "robertiatan@gmail.com", school);
  expect(int.school).toBe(school);
});

// getSchool method test
test("getSchool method works correctly", () => {
  const int = new Intern("Robert", 1, "robertiatan@gmail.com", "UofT");
  expect(int.getSchool()).toBe("UofT");
});

// getRole method works correctly
test("Role method works correctly", () => {
  const role = "Intern";
  const int= new Intern("Robert", 1, "robertiatan@gmail.com", "UofT");
  expect(int.getRole()).toBe(role);
});
