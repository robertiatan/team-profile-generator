const myTeam = (team) => {
  const createManager = (manager) => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2></i> ${manager.getRole()}</h3>`;
  };

  const createEngineer = (engineer) => {
    return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
  `;
  };

  const createIntern = (intern) => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
  `;
  };

  const html = [];
  `
<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1>
    <link rel="stylesheet" href="style.css">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="display-4">My Team</h1>
            </div>
            </div>
            </div>
            <div class="container">
            <div class="row">
            <div class="row team-area col-12 d-flex justify-content-centre">
            ${myTeam(team)} 
            </div>
            </div>
            </body>
            </html>
            `;
};
