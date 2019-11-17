const inquirer = require("inquirer");
// const fs = require("fs");
const generateHTML = require("./lib/generateHTML");
const write2File = require("./lib/write2File");

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

      // assemble fullname of employee
      const email = `${ansGenEmpl.first_name[0]}${ansGenEmpl.last_name}@company.com`;
      const fullName = `${ansGenEmpl.last_name}, ${ansGenEmpl.first_name}`;

      // increment id for next employee
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
    }

    // sort lists 
    console.log("before",engList);
    manList.sort(nameCompare);
    engList.sort(nameCompare);
    intList.sort(nameCompare);
    console.log("after",engList);

    const file = generateHTML(teamList);

    // write to file

    const filename = "./index.html";
    write2File(filename,file);

  } catch (error) {
    console.log(`There was a problem ${error}`);
  }
}

function nameCompare(a, b) {
  // Use toUpperCase() to ignore character casing
  console.log(`a ${a} - b ${b}`)
  const nameA = a.getName().toUpperCase();
  const nameB = b.getName().toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

init();