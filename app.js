const inquirer = require("inquirer");
// const fs = require("fs");
const generateHTML = require("./lib/generateHTML");

// load specific employee type classes
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const questions = require("./lib/questions")

const test = false;

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
  const engList = [];
  const intList = [];
  const manList = [];

  const teamList = [manList,engList,intList];
  // const ansRoleEmpl;
  let employee;

  // will need to wrap this in a loop for n-employees
  try {
    let again = true;
    let id = 0;

    while (again) {
      // build employee information (i would put this in the Employee object)
      const ansGenEmpl = await askGenEmpl();
      // maybe these should be in the employee class?
      if (test) console.log("try got general:", ansGenEmpl);

      const email = `${ansGenEmpl.first_name[0]}${ansGenEmpl.last_name}@company.com`;
      const fullName = `${ansGenEmpl.last_name}, ${ansGenEmpl.first_name}`;
      // need id generator
      id += 1;

      switch (ansGenEmpl.role) {
        case 'Intern':
          ansRoleEmpl = await askIntEmpl();
          employee = new Intern (fullName,id,email,ansRoleEmpl.school);
          intList.push(employee);
          break;
        case 'Engineer':
          ansRoleEmpl = await askEngEmpl();
          employee = new Engineer (fullName,id,email,ansRoleEmpl.github);
          engList.push(employee);
          break;
        case 'Manager':
          ansRoleEmpl = await askManEmpl();
          employee = new Manager (fullName,id,email,ansRoleEmpl.office);
          manList.push(employee);
          break;
      }

      if (test) console.log(employee);
      console.log(`Added new employee ${employee.getName()} to team!`);

      // can i combine this into one statement
      const askResult = await askAgain();
      again = askResult.again;

      if (test) console.log("again",again);
    }

    // sort lists
    manList.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1);
    engList.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1);
    intList.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1);

    if (test) { console.log(teamList); }
    const file = generateHTML(teamList);
    if (true) { console.log(file); }
    // write to file

  } catch (error) {
    console.log(`There was a problem ${error}`);
  }
}

init();