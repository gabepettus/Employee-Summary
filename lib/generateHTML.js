module.exports = function generateHTML(team) {

  // dynamically build team from list provided
  let teamListHtml; 

  console.log("team",team);
  console.log("team.lenght",team.length);

  for (let i = 0; i < team.length; i += 1) {
    // build html card for each employee (object)
    // this needs help 
  console.log(`team[${i}]`,team[i]);
  console.log(`team[${i}].length`,team[i].length);

    let isNewRow = true;
    for (let j = 0; j < team[i].length; j += 1) {
      const empl = team[i][j];

      console.log("empl",empl);
      if (isNewRow) { teamListHtml += ` <div class="row"> `; }

      teamListHtml += `
        <div class="card col">
          <h3> ${empl.getRole()} </h3>
          <h4> ${empl.getName()} </h4>
          <h5> ${empl.getId()} </h5>
        </div>
      `;
      // need to figure out the drawing at the end
      if ( !isNewRow || j >= team[i].length ) { 
        teamListHtml += ` </div>`; 
        isNewRow = true;
      } else {
        isNewRow = false;
      }
    }
  }

  console.log(teamListHtml);
  // HTML 
  const HTML = `
  <!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap" rel="stylesheet">
        <title>Document</title>
        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: #879CDF;
           padding-top: 100px;
           }
           body {
           background-color: white;
           /* image for background */
           background-image: url('./images/background.jpg');
           -webkit-print-color-adjust: exact !important;
           font-family: 'Open Sans Condensed', sans-serif;
           }
           main {
           background-color: #E9EDEE;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h5, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           }
           h2 {
           font-size: 2.5em;
           }
           h3 {
           font-size: 2em;
           }
           h4 {
           font-size: 1.5em;
           }
           h5 {
           font-size: 1.3em;
           }
           h6 {
           font-size: 1.2em;
           }
           button:hover {
            background-color: #FF8374 !important;
            color: #fff !important;
           }
           .navbar {
              /* pulls everything down to push up against bottom border */
              margin: 15px;
              padding-bottom: 0;

              /* allows ??? to control the horizontal position */
              padding-left: 0;

              /* creates solid line for the bottom border  */
              border-bottom: solid;
              /* border-bottom-color: #ccc; */
              /* border-bottom-color: #D1CB6F; */
              /* background-color: #B8C9D1; */
            }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: #FF8374;
           color: white;
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           }
           .photo-header img {
           width: 250px;
           height: 250px;
           border-radius: 50%;
           object-fit: cover;
           margin-top: -75px;
           border: 6px solid #FEE24C;
           box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
           }
           .photo-header h1, .photo-header h2 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }
           .links-nav {
           width: 100%;
           text-align: center;
           padding: 20px 0;
           font-size: 1.1em;
           }
           .nav-link {
           display: inline-block;
           margin: 5px 10px;
           }

           .workExp-date {
           font-style: italic;
           font-size: .7em;
           text-align: right;
           margin-top: 10px;
           }

           .container {
           padding: 20px;
           padding-left: 100px;
           padding-right: 100px;
           }
  
           .row {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 20px;
             margin-bottom: 10px;
           }
  
           .card {
             padding: 10px;
             border-radius: 6px;
             background-color: #FF8374;
             color: white;
             margin: 20px;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
  
           a, a:hover {
           text-decoration: none;
           color: inherit;
           font-weight: bold;
           }
  
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style>
        </head>
  <body class="wrapper">
  <div class="photo-header">
    <img src="./images/artdecologo.jpg" alt="image by rockwell kent" />
    <h2>Welcome to the Company Employee Roster!</h2>
    <h5>Reminder that this is not a real company and no purchase should be made from it</h5>
  </div>
  <!--end photo-header-->
</div>
  <main class="container">
  ${teamListHtml}
  </main>
<footer>
<div style="height: 300px">
</div>
</footer>

</body>
</html>
`;

  return HTML;
}