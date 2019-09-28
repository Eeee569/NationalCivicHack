const email = require("./Email.js");
const survey = {
    questions: [
        {
            question1: "How can we help you?",
            question2: "Who are you dealing with?"
        }
    ],
    answers: [
        {
            optionsForQuestion1: [
                "I'd like to report that my rights have been violated",
                "I want to learn more about my rights"
            ],
            optionsForQuestion2: [
                "Immigration",
                "Police"
            ]
        }   
    ]
}

const surveyResults = {
    badgeNum:"",
    patrolCarNum:"",
    agency:"ICE",
    addWitness:[
    {
        name: "",
        witnessNum: "",
        witnessEmail: "",
    }
],
    contactName:"",
    contactEmail:"",
    submitDate:"",
    reportDate:""
}

const getSurvey = () => {
    return survey
}

const submitSurvey = (surveyResults) => {
    let body = `This is a report generated on the behalf of ${surveyResults.contactName}. \n \n 
    ${surveyResults.contactName} feels their rights were violated by ${surveyResults.agency} on ${surveyResults.reportDate}.
    \n ${surveyResults.contactName} has filled out the report to the best of thier ability: \n 
    Agency: ${surveyResults.agency}\n
    Badge Number: ${surveyResults.badgeNum}\n
    Patrol Car Number: ${surveyResults.patrolCarNum}\n
    ${witness(surveyResults.addWitness)}\n\n
    This report was submitted on ${surveyResults.submitDate}`;

    email.sendEmail(body,"Temp Subject","willwolfe1@gmail.com");
};

function witness(poopshoot){
    let mainString = '';
    for (let i = 0; i < poopshoot.length; i++){
        const string1 = `Witness name: ${poopshoot[i].name}`;
        const string2 = `Witness number: ${poopshoot[i].witnessNum}`;
        const string3 = `Witness email: ${poopshoot[i].witnessEmail}`;
        mainString += `${string1},\n ${string2},\n ${string3}\n`;
    }
    return mainString;
}


module.exports = {
    getSurvey:function(){return getSurvey()},
    submitSurvey: function(surveyResults){submitSurvey(surveyResults)}
}
