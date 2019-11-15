const inquirer = require("inquirer");
// const fs = require("fs");
// const generateHTML = require("./generateHTML");

// load specific employee type classes
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const questions = require("./lib/questions")

const test = true;

// use inquire to ask general employee questions
const askGenEmpl = () => {
  if (test) console.log("entered: askGenEmpl", questions.general);
  return inquirer.prompt(questions.general);
};

// use inquire to ask intern specific employee questions
const askIntEmpl = () => {
  if (test) console.log("entered: askIntEmpl", questions.intern);
  return inquirer.prompt(questions.intern);
};

// use inquire to ask engineer specific employee questions
const askEngEmpl = () => {
  if (test) console.log("entered: askEngEmpl", questions.engineer);
  return inquirer.prompt(questions.engineer);
};

// use inquire to ask manager specific employee questions
const askManEmpl = () => {
  if (test) console.log("entered: askManEmpl", questions.manager);
  return inquirer.prompt(questions.manager);
};

// use inquire to ask manager specific employee questions
const askAgain = () => {
  if (test) console.log("entered: askAgain", questions.again);
  return inquirer.prompt(questions.again);
};

async function init() {
  if (test) console.log("started init:");
  // array in which to store employees
  const teamList = [];
  // const ansRoleEmpl;
  let employee;

  // will need to wrap this in a loop for n-employees
  try {
    let again = true;
    while (again) {
      // build employee information (i would put this in the Employee object)
      const ansGenEmpl = await askGenEmpl();
      // maybe these should be in the employee class?
      if (test) console.log("try got general:", ansGenEmpl);

      const email = `${ansGenEmpl.first_name[0]}${ansGenEmpl.last_name}@company.com`;
      const fullName = `${ansGenEmpl.first_name} ${ansGenEmpl.last_name}`;
      // need id generator
      const id = 123;

      switch (ansGenEmpl.role) {
        case 'Intern':
          ansRoleEmpl = await askIntEmpl();
          employee = new Intern (fullName,id,email,ansRoleEmpl.school);
          break;
        case 'Engineer':
          ansRoleEmpl = await askEngEmpl();
          employee = new Engineer (fullName,id,email,ansRoleEmpl.github);
          break;
        case 'Manager':
          ansRoleEmpl = await askManEmpl();``
          employee = new Manager (fullName,id,email,ansRoleEmpl.office);
          break;
      }

      console.log("Created new employee",employee);

      // can i combine this into one statement
      const askResult = await askAgain();
      again = askResult.again;

      if (test) console.log("again",askResult);
      if (test) console.log("again",again);
    }
    // const page = generateHTML(data, responseArr);
  } catch (error) {
    console.log(`There was a problem ${error}`);
  }
}

init();