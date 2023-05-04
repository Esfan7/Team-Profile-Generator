const Employee = require('../src/Employee');

const person = new Employee("Greg", 1234 , "greg@gmail.com")

test('Testing Employee Class', ()=>{
    expect(person.getName()).toBe("Greg")
})