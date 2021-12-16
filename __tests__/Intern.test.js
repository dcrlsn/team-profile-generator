const Intern = require('../lib/engineer');

const intern = new Intern('Jeff', 37, 'jerfderf@gmail.com', 'Engineer', 'jerfderf');

it('should create an engineer object', () => {
  expect(typeof intern).toBe('object')
});

it('should return the role "Intern" with getRole()', () => {
  expect(intern.getRole()).toBe('Engineer')
});

it('should return the intern\'s school with getSchool()', () => {
  expect(intern.getSchool()).toEqual(expect.any(String))
});