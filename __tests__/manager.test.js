// Imports the manager constructor
const Manager = require("../lib/Manager");

// Returns the manager object
test('Manager object created', () => {
    const manager = new Manager(
        "Robert",
        01,
        "robertiatan@gmail.com",
        13
      );
      expect(manager.name).toEqual("Robert");
      expect(manager.email).toEqual("robertiatan@gmail.com");
      expect(manager.id).toEqual(01);
      expect(manager.officeNumber).toEqual(13)
});

// getOfficeNumber method test
test('getOfficeNumber method works correctly', () => {
    const manager = new Manager(
        "Robert",
        01,
        "robertiatan@gmail.com",
        13
      );
      expect(manager.getOfficeNumber).toEqual(13);
});

// getRole method test
test('Role method works correctly', () => {
    const role = "Manager";
    const manager = new Manager(
        "Robert",
        01,
        "robertiatan@gmail.com",
        13
      );   
      expect(manager.getRole).toEqual(role);
});