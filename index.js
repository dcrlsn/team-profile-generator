//node modules
const fs = require('fs');
const inquirer = require('inquirer');

//src modules
const generateTeam = require('./src/generateTeam')

//team profiles
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const teamArray = [];


//prompts
const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the manager\'s name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the manager\'s id?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the manager\'s email?'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the manager\'s office number?'
    }
  ]).then(function ({ name, id, email, officeNumber }) {
    const manager = new Manager(name, id, email, "Manager", officeNumber)
    teamArray.push(manager);
    addAnotherEmployee();
  })
}

const addEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'What is the employee\'s role?',
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the employee\'s name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employee\'s ID?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the employee\'s email?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineer\'s github?',
      when: (input) => input.role === 'Engineer'
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the intern\'s school?',
      when: (input) => input.role === 'Intern'
    }
  ]).then(function ({ id, name, email, role, github, school }) {
    let employee;
    if (role === 'Engineer') {
      employee = new Engineer(name, id, email, role, github);
    }
    else {
      employee = new Intern(name, id, email, role, school);
    }
    teamArray.push(employee);
    addAnotherEmployee();
  })
}

const addAnotherEmployee = () => {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'another',
      message: 'Would you like to add another employee?'
    }
  ]).then(function ({ another }) {
    if (another) addEmployee();
    else writeFile();
  })
}

const writeFile = str => {
  fs.writeFile('./dist/index.html', generateTeam(teamArray), err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Page created successfully')
    }
  })
}

const init = () => {
  addManager()
}

init()