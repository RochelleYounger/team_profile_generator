const { initialPrompt, secondPrompt } = require("./utils/prompt_script");
const { writeFile, copyFile } = require("./utils/generate_site");
const { generateTemplate } = require("./src/template");

initialPrompt()
    .then(secondPrompt)
    .then(data => {
        console.log(data);
        return data;
    })
    .then(data => generateTemplate(data))
    .then(template => writeFile(template))
    .then(response => {
        console.log(response);
        return copyFile();
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
;