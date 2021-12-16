const Engineer = require('../lib/engineer');

const engineer = new Engineer('Jeff', 37, 'jerfderf@gmail.com', 'Engineer', 'jerfderf');

it('should create an engineer object', () => {
  expect(typeof engineer).toBe('object')
});

it('should return the role "Engineer" with getRole()', () => {
  expect(engineer.getRole()).toBe('Engineer')
});

it('should return the github username with getGithub()', () => {
  expect(engineer.getGithub()).toEqual(expect.any(String))
});