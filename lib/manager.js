  // Require Employee class
const Employee = require("./Employee");

// Purpose: To create the Manager class that extends the Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
  }

  // Methods
  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

// Export the Manager class
module.exports = Manager;
