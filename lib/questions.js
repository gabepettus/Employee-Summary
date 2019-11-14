questions = {
  general: [
            {
              type: "input",
              name: "first_name",
              message: "Enter the employees first name:"
            },
            {
              type: "input",
              name: "last_name",
              message: "Enter the employees last name:"
            },
            {
              type: "list",
              message: "Enter the employess role:",
              name: "role",
              choices: ["Engineer", "Intern", "Manager"]
            }
          ],

  manager: [
            {
              type: "input",
              name: "office",
              message: "Enter the employees office number:"
            }
          ],

  intern: [
            {
              type: "input",
              name: "school",
              message: "Enter the employees school:"
            }
          ],

  engineer: [
              {
                type: "input",
                name: "github",
                message: "Enter the employees github account:"
              }
            ]
};

module.exports = questions;
