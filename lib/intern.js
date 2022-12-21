  // Require Employee class
const Employee = require("./Employee");

// Purpose: To create the Intern class that extends the Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, "Intern");
    this.school = school;
  }

  // Methods
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
 // Export the Intern class
module.exports = Intern;
