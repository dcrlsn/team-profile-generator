const Employee = require('../lib/employee');

const employee = new Employee('Jeff', 37, 'jerfderf@gmail.com');

it('should create an employee object', () => {
  expect(typeof employee).toBe('object')
});

it('should return the employees name with getName()', () => {
  expect(employee.getName()).toEqual(expect.any(String))
});
it('should return the employees ID with getID()', () => {
  expect(employee.getId()).toEqual(expect.any(Number))
});

it('should return the employee email with getEmail()', () => {
  expect(employee.getEmail()).toEqual(expect.any(String))
});

it('should return the role "Employee" with getRole()', () => {
  expect(employee.getRole()).toBe('Employee')
});