// Imports the engineer constructor
const Engineer = require("../lib/Engineer");

// Test for creating the engineer object
test("Engineer object created", () => {
  const engineer = new Engineer(
    "Robert",
    01,
    "robertiatan@gmail.com",
    "robertiatan"
  );
  expect(engineer.name).toEqual("Robert");
  expect(engineer.email).toEqual("robertiatan@gmail.com");
  expect(engineer.id).toEqual(01);
  expect(engineer.github).toEqual('robertiatan')
});

// Tests if the engineer's github is returned correctly
test('getGithub returns correctly', () => {
    const github = 'robertiatan';
    const engineer = new Engineer(
      "Robert",
      01,
      "robertiatan@gmail.com",
      "robertiatan"
    );
    expect(engineer.getGithub).toEqual(github);
});

// getRole method test
test('Role returns correctly', () => {
    const role = 'Engineer'
    const engineer = new Engineer(
      "Robert",
      01,
      "robertiatan@gmail.com",
      "robertiatan"
    );
    expect(engineer.getRole).toEqual(role);
});