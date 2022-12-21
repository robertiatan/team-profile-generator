// Imports the engineer constructor
const Engineer = require("../lib/Engineer");

// Test for creating the engineer object
test("Engineer object created", () => {
  const eng = new Engineer();
  expect(typeof eng).toBe("object");
});

// Test for setting Github
test("Engineer Github set", () => {
  const github = "robertiatan";
  const eng = new Engineer("Robert", 1, "robertiatan@gmail.com", github);
  expect(eng.github).toBe(github);
});

// Tests if the engineer's github is returned correctly
test("getGithub returns correctly", () => {
  const github = "robertiatan";
  const eng = new Engineer(
    "Robert",
    1,
    "robertiatan@gmail.com",
    github
  );
  expect(eng.getGithub()).toBe(github);
});

// getRole method test
test("Role returns correctly", () => {
  const testRole = "Engineer";
  const eng = new Engineer(
    "Robert",
    1,
    "robertiatan@gmail.com",
    "robertiatan"
  );
  expect(eng.getRole()).toBe(testRole);
});
