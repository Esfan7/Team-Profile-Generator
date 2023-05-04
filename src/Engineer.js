const Employee = require('./Employee.js')
class Engineer extends Employee{
    constructor(name,id,email,github) {
        super(name,id,email);
        this.github = github
        this.name = name
        this.email = email
        this.id = id
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer