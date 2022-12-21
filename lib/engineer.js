 // Requires the Employee class
const Employee = require("./Employee");

// Purpose: To create the Engineer class that extends the Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, "Engineer");
    this.github = github;
  }

  // Methods
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}
 // Export the Engineer class
module.exports = Engineer;
