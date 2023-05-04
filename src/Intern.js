const Employee = require('./Employee.js')
class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school = school
        this.name = name
        this.email = email
        this.id = id
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
}
module.exports = Intern