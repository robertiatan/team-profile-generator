// Requirements: fs, path
const path = require("path");
const fs = require("fs");

// Team creation function with HTML template
const myTeam = (team) => {
    // Manager card
  const createManager = (manager) => {
    return `
    <div class="card employee-card">
    <div class="card-header bg-primary">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: ${manager.getEmail()}</li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
        `;
    };

    // Engineer card
  const createEngineer = (engineer) => {
    return `
    <div class="card employee-card">
    <div class="card-header bg-warning text-white">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // Intern card
  const createIntern = (intern) => {
    return `
    <div class="card employee-card">
    <div class="card-header bg-danger text-white">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    // Array to store HTML cards
  const html = [];

    // Pushing the manager card to the array
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );
    // Pushing the engineer card to the array
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
      .join("")
  );
    // Pushing the intern card to the array
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
      .join("")
  );

    // Returning the array
  return html.join("");
};

// Exporting the HTML template
module.exports = (team) => {

    // Returning the HTML template
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel= "stylesheet" href= "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-secondary">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${myTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
