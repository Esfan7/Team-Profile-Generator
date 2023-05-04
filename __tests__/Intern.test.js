const Intern = require('../src/Intern');

const person = new Intern("Greg", 1234 , "greg@gmail.com", "college of mass")

test('Testing Employee Class', ()=>{
    expect(person.getName()).toBe("Greg")
})