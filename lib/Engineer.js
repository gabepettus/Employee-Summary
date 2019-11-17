'use strict';

const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(name,id,email,github) {
    super(name,id,email);

    this.github = github;
    this.special = `Github account: ${this.github}`;
  }

  getGithub() { return this.github; }
  getRole() { return "Engineer"; }

  // need to extend draw method
}

module.exports = Engineer;