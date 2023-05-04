const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./src/Employee.js')
const Engineer = require('./src/Engineer.js')//
const Intern = require('./src/Intern.js')
const Manager = require('./src/Manager.js')
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests,
const questions = [

    {
        type: "list",
        choices: ["Engineer", "Intern"],
        name: "role",
        message: "What's your role?"
    }

];

const TMQuestions = [
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee id?"
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    }
]

let masterList = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let allCards = "";

    data.map(e => {
        allCards += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${e.name} ${e.id}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${e.getRole()}</h6>
          <h6 class="card-subtitle mb-2 text-muted">`;

         switch(e.getRole()){
            case "Manager": allCards += e.officeNumber; break;
            case "Engineer": allCards += e.github; break;
            case "Intern": allCards += e.school; break;
         }


          
          
          allCards += `</h6><h6 class="card-subtitle mb-2 text-muted">
          <a href="mailto:${e.email}">${e.email}</a>
         </div>
      </div>`;

    })//end of map, end of loop

     //closed out the page required
     allCards += `</div>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
   </body>
 </html>
 `


    fs.appendFile(fileName, allCards, (err) => {
        if (err) {
          console.log(err);
        }
        else {
          // Get the file contents after the append operation
          //console.log("\nFile Contents of file after append:",
           // fs.readFileSync("example_file.txt", "utf8"));
        }
      });


};

// TODO: Create a function to initialize app
function init() {
    askTM();


}

// Function call to initialize app
init();

function askTM() {
    inquirer
        .prompt(TMQuestions)
        .then((answers) => {
            const { name, id, officeNumber, email } = answers; //get answers
            const newTeamManager = new Manager(name, id, email, officeNumber);
            //write team manager
            masterList.push(newTeamManager);
            console.log("done");

            askEmployeeList(); //next question
        })
}

function areYouDone (){
    inquirer
    .prompt({
        type: "confirm",
        message: "Are you done?",
        name: "done"
    })
    .then((answers) => {
       if(answers.done === true){
        //write yoru file
        console.log("done!");
console.log(masterList)

writeToFile("index.html",masterList)




       } else {
        askEmployeeList(); //next question
       }

    })
}

function askEmployeeList() {
    inquirer
        .prompt(questions)
        .then((answers) => {

            if (answers.role === "Engineer") {
                inquirer.prompt([{
                        type: "input",
                        message: "What is your Github user name?",
                        name: "github"
                    }, 
                    {
                        type: "input",
                        name: "email",
                        message: "What is your email address?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is your employee id?"
                    },
                    {
                        type: "input",
                        name: "name",
                        message: "What is your name?"
                    }])
                    .then(answers=>{
                        const newEngineer = new Engineer(
                            answers.name,
                            answers.id,
                            answers.email,
                            answers.github
                        );
                        masterList.push(newEngineer)
                        areYouDone()
                    })

            
            } else if (answers.role === "Intern") {

                inquirer.prompt([
                    {
                        type:"input",
                        message: "What school did you go to?",
                        name:"school",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is your email address?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is your employee id?"
                    },
                    {
                        type: "input",
                        name: "name",
                        message: "What is your name?"
                    }
                ])
                .then(answers=>{
                const newIntern = new Intern(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.school)
                    masterList.push(newIntern)
                    areYouDone()
                
            })

            //





            //are you done

            // if(yes){
            //     writeTofile
            // } else {
            //      askEmployeeList()
            // }


}})



};


