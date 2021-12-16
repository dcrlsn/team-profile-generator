const Intern = require('../lib/intern');

const intern = new Intern('Jeff', 37, 'jerfderf@gmail.com', 'Intern', 'Pennstate');

it('should create an intern object', () => {
  expect(typeof intern).toBe('object')
});

it('should return the role "Intern" with getRole()', () => {
  expect(intern.getRole()).toBe('Intern')
});

it('should return the intern\'s school with getSchool()', () => {
  expect(intern.getSchool()).toEqual(expect.any(String))
});