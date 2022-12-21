// Required modules for roles and node modules
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const htmlTemplate = require("./src/htmlTemplate.js");

html = [];

// Function to initialize app
function initialize() {
  function initTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "newEmployee",
          message: "Would you like to add a Manager, Engineer, or Intern?",
          choices: ["Manager", "Engineer", "Intern", "No, I'm done!"],
          validate: function (input) {
            if (input.trim() === "") {
              return "Please select an option.";
            } else {
              return true;
            }
          },
        },
      ])
      .then(function (userInput) {
        switch (userInput.newEmployee) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  // Function to add Manager
  function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What's the name of the Manager?",
        default: "Manager",
        validate: function (input) {
          if (input.trim() === "") {
            return "Please enter a name.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What's the email of the Manager?",
        default: "manager@example.com",
        validate: function (input) {
          if (input.trim() === "") {
            return "Please enter an email.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What's the ID of the Manager?",
        default: 1,
        validate: function (input) {
          if (isNaN(input.trim())) {
            return "Please enter an ID.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What's the office number of the Manager?",
        default: 1,
        validate: function (input) {
          if (isNaN(input.trim())) {
            return "Please enter an ID.";
          } else {
            return true;
          }
        },
      },
    ])
    .then(function (userInput) {
      const manager = new Manager(
        userInput.managerName,
        userInput.managerId,
        userInput.managerEmail,
        userInput.managerOfficeNumber
      );
      html.push(manager);
      console.log(html);
      initTeam();
    });
  };

  // Function to add Engineer
  function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What's the name of the Engineer?",
        default: "Engineer",
        validate: function (input) {
          if (input.trim() === "") {
            return "Please enter a name.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What's the email of the Engineer?",
        default: "engineer@example.com",
        validate: function (input) {
          if (input.trim() === "") {
            return "Please enter an email.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "What's the ID of the Engineer?",
        default: 02,
        validate: function (input) {
          if (isNaN(input.trim())) {
            return "Please enter an ID.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What's the Github of the Engineer?",
        default: "github.com/engineer",
        validate: function (input) {
          if (input.trim() === "") {
            return "Please enter an Github.";
          } else {
            return true;
          }
        },
      },
    ])
    .then(function (userInput) {
      const engineer = new Engineer(
        userInput.engineerName,
        userInput.engineerId,
        userInput.engineerEmail,
        userInput.engineerGithub
      );
      html.push(engineer);
      initTeam();
    });
  };

  // Function to add Intern
  function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What's the name of the Intern?",
        default: "Intern",
        validate: function (input) {
          if (input.trim() === "") {
            return "Please enter a name.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "What's the email of the Intern?",
        default: "intern@example.com",
        validate: function (input) {
          if (input.trim() === "") {
            return "Please enter an email.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: "What's the ID of the Intern?",
        default: 03,
        validate: function (input) {
          if (isNaN(input.trim())) {
            return "Please enter an ID.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school does the Intern attend?",
        default: "University of Interns",
        validate: function (input) {
          if (input.trim() === "") {
            return "Please enter a school.";
          } else {
            return true;
          }
        },
      },
    ])
    .then(function (userInput) {
      const intern = new Intern(
        userInput.internName,
        userInput.internEmail,
        userInput.internId,
        userInput.internSchool
      );
      html.push(intern);
      initTeam();
    });
  };

  // Function to build team
  const buildTeam = () => {
  fs.writeFileSync(outputPath, htmlTemplate(html), "utf-8");
  console.log("Your team profile has been created!");
  };

  initTeam();
}

initialize();