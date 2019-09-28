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
    answerToQuestion1: "I'd like to report that my rights have been violated" ,
    answerToQuestion2: "Immigration",
    report: true,
    learn: false,
    immigration: true,
    police: false

}

const Violation = {
    isViolation: true
}

const getSurvey = () => {
    return survey
}

const submitSurvey = (surveyResults) => {
    
    return isViolation;
}
