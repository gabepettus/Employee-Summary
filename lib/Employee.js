'use strict';

class Employee {
  constructor(name,id,email) {
    this.name = name;
    this.id = id; //this needs to be a function
    this.email =  email;
  }

  getName() { return this.name; }
  getId()   { return this.id; }
  getEmail()   { return this.email; }
  getRole()   { return "Employee"; }

  // need method to generate card
}

module.exports = Employee;