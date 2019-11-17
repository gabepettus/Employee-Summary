'use strict';
// const uuidv1 = require('uuid/v1')

class Employee {
  constructor(name,id,email) {
    this.name = name;
    this.email =  email;
    this.id = id;
    this.special = "special power";
  }

  getName() { return this.name; }
  getId()   { return this.id; }
  getEmail()   { return this.email; }
  getRole()   { return "Employee"; }
  getSpecial()   { return this.special; }

  // need method to generate card
}

module.exports = Employee;