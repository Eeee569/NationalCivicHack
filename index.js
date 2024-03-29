var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var path = require('path');

let survey = require('./src/survey');



let webPath = "/home/will/Documents/hackathon/NationalCivicHack/";


app.get('/', function(req, res) {
    //res.sendFile(path.join(webPath + '/index.html'));
    res.sendFile('index.html', { root: path.join(webPath, './web') });
});


app.get('/getSurvey', function (req, res) {
    res.send(JSON.stringify(survey.getSurvey()));
});

app.post('/result', function (req, res) {
    console.log("Got a POST request: " +JSON.stringify(req.body));
    survey.submitSurvey(req.body)
    //res.send(JSON.stringify({request:req.body}));
    res.end();
});

app.get('/*', function(req, res) {
    //res.sendFile(path.join(webPath + '/index.html'));
    res.sendFile(req.originalUrl, { root: path.join(webPath, './web') });
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});

