const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber;
    this.role = role;
  }
  getRole() {
    return this.role;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;