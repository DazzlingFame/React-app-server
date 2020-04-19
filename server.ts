// @ts-ignore
import bodyParser from "body-parser";
// @ts-ignore
import express from "express";
import {TodoType} from "./types";

const app = express();
const port = 8000;

let todos: Array<TodoType> = [
    {id: 1, text: 'note 1', checked: false},
    {id: 2, text: 'note 2', checked: false},
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/headerText', (req, res) => {
    res.send({text: 'Hello mister Freeman'});
});

app.get('/api/getTodos', (req, res) => {
    res.send({todos: todos});
});

app.post('/api/setTodos', (req, res) => {
   const clientTodos: Array<TodoType> = req.body.param.todosArray;
   todos = clientTodos;
   console.log(clientTodos);
   res.send({todos: todos});
});

app.post('/api/headerPost', (req, res) => {
    const data = req.body.param.text;
    res.send({text:  `I received your POST request. This is what you sent me: ${data}`});
});
app.listen(port, () => {
    console.log('Listening port ' + port);
});