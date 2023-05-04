const Manager = require('../src/Manager');

const person = new Manager("Greg", 1234 , "greg@gmail.com", "office")

test('Testing Employee Class', ()=>{
    expect(person.getName()).toBe("Greg")
})