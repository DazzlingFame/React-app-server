import {MongoClient} from "mongodb";
import bodyParser = require("body-parser");
import express = require("express");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/headerText', (req, res) => {
    res.send({text: 'Hello mister Freeman'});
});

app.post('/api/headerPost', (req, res) => {
    const data = req.body.param.text;
    res.send({text:  `I received your POST request. This is what you sent me: ${data}`});
});
app.listen(port, () => {
    console.log('Listening port ' + port);
});