const Manager = require('../lib/manager');

const manager = new Manager('Jeff', 37, 'jerfderf@gmail.com', 'Manager', 7);

it('should create a manager object', () => {
  expect(typeof manager).toBe('object')
});

it('should return the role "Manager" with getRole()', () => {
  expect(manager.getRole()).toBe('Manager')
});

it('should return the manager\'s office number with getOfficeNumber()', () => {
  expect(manager.getOfficeNumber()).toEqual(expect.any(Number))
});