// Imports the intern constructor
const Intern = require("../lib/Intern");

// Returns the intern object
test('Intern object created', () => {
    const intern = new Intern(
        "Robert",
        01,
        "robertiatan@gmail.com",
        "UofT"
      );
      expect(intern.name).toEqual("Robert");
      expect(intern.email).toEqual("robertiatan@gmail.com");
      expect(intern.id).toEqual(01);
      expect(intern.school).toEqual("UofT")
});

// getSchool method test
test('getSchool method works correctly', () => {
    const intern = new Intern(
        "Robert",
        01,
        "robertiatan@gmail.com",
        "UofT"
      );
      expect(intern.getSchool).toEqual("UofT");
});

// getRole method works correctly
test('Role method works correctly', () => {
    const role = "Intern";
    const intern = new Intern(
        "Robert",
        01,
        "robertiatan@gmail.com",
        "UofT"
      );   
      expect(intern.getRole).toEqual(role);
});