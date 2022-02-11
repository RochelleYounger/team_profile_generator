const inquirer = require("inquirer");

// object where all member data is stored
let members = {
    manager: [],
    engineers: [],
    interns: [],
};

// prompt question arrays
const questions1 = [
    {
        type: "input",
        name: "name",
        message: "Please enter team manager's name. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Please enter team manager's employee id. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter team manager's email. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter team manager's office number. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    },
];
const questions2 = [
    {
        type: "input",
        name: "name",
        message: "Please enter member's name. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "role",
        message: "Please select member's role.",
        choices: ["engineer","intern"]
    },
    {
        type: "input",
        name: "id",
        message: "Please enter member's employee id. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter member's email. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Please enter member's github. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        },
        when: ({ role }) => {
            if (role === "engineer") {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "Please enter member's school. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        },
        when: ({ role }) => {
            if (role === "intern") {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmAddMember",
        message: "another member?",
        default: false
    }
];

// first prompt for manager info
const initialPrompt = () => {
    return inquirer.prompt(questions1)
        .then(data => {
        data.role = "manager";
        members.manager.push(data);
        })
    ;
};

// prompt for additional members
const secondaryPrompt = () => {
    console.log(`
    =================
    Add New Member
    =================
    `);
    return inquirer.prompt(questions2)
        .then(memberData => {
            if (memberData.role === "engineer") {
                members.engineers.push(memberData);
            } else if (memberData.role === "intern") {
                members.interns.push(memberData);
            }
            if (memberData.confirmAddMember) {
                return secondaryPrompt();
            } else {
                console.log(members);
                return;
            }
        })
    ;
};

initialPrompt()
    .then(secondaryPrompt)
    .catch(err => {
        console.log(err);
    })
;