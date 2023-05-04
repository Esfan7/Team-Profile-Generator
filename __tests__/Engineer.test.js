const Engineer = require('../src/Engineer');

const person = new Engineer("Greg", 1234 , "greg@gmail.com", "gregio")

test('Testing Employee Class', ()=>{
    expect(person.getName()).toBe("Greg")
})