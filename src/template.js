const displayIcon = role => {
    if (role === "Manager") {
        return `<i class="fas fa-mug-hot"></i>`
    } else if (role === "Engineer") {
        return `<i class="fas fa-glasses"></i>`
    } else if (role === "Intern") {
        return `<i class="fas fa-user-graduate"></i>`
    }
}

const displayInfo = (role, member) => {
    if (role === "Manager") {
        return `Office Number: ${member.getOfficeNumber()}`
    } else if (role === "Engineer") {
        return `Github: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a>`
    } else if (role === "Intern") {
        return `School: ${member.getSchool()}`
    }
}

const generateCards = (members) => {
    let cardHTML = "";
    members.forEach(myFunction)

    function myFunction(member) {
        cardHTML += `
            <article class="card">
                <div  class="card-title">
                    <h2>${member.getName()}</h2>
                    <h3><span>${displayIcon(member.getRole())}</span> ${member.getRole()}</h3>
                </div>
                <div class="card-info">
                    <p>ID: ${member.getId()}</p>
                    <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
                    <p>${displayInfo(member.getRole(), member)}</p>
                </div>
            </article>
        `;
    }

    return cardHTML;
}


const generateTemplate = memberData => {
  
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <script src="https://kit.fontawesome.com/e458d72f28.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css">
    </head>

    <body>
        <header class="title">
            <h1 class="title-text">My Team</h1>
        </header>
        <main class="container">
            ${generateCards(memberData)}
        </main>
    </body>
    </html>
    `;
};
  
module.exports = { generateTemplate };