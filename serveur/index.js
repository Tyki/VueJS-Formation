var todoManager = require('./todos/todosManager');
var TodoList = todoManager.TodoList;

var express = require('express');
var cors = require('cors');

var session = require('express-session');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended : false});

var app=express();

/*
 * Pour autoriser les requetes extérieures
 */
app.use(cors({credentials: true, origin: true}));

app.options('*', cors());

app.use(session({
    secret: 'token',
    resave: false,
    saveUninitialized: true
}));

app.use(function(req, res, next) {
    next();
});

/*
Middleware permettant d'initialiser la todos-list si jamais elle n'existe pas encore et de la stocker en session
 */
app.use(function (req, res, next) {
    //si la liste n'est pas encore crée
    if(!req.session.todoList) {
        req.session.todoList = new TodoList();
    }
    Object.setPrototypeOf(req.session.todoList,TodoList.prototype); //Récupération du comportement de l'objet TodoList
    next();
});

/*
Pour récupérer toutes les todos
 */
app.get('/listTodos', function(req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(req.session.todoList.getAllTodosByLimit());
});

/*
 Pour récupérer certaines todos, selon un point de départ et un nombre demandé
 */
app.get('/listTodos/:offset/:size', function(req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(req.session.todoList.getAllTodosByLimit(req.params.offset,req.params.size));
});

/*
Pour ajouter une todo, selon un nom et une description donnée (l'id se génère automatiquement via le composant TodoList)
 */
app.post('/addTodo',urlEncodedParser,function(req,res) {
    let nomTodo = req.body.nom;
    let descriptionTodo = req.body.description;
    res.setHeader('Content-Type', 'application/json');
    req.session.todoList.addTodo(nomTodo,descriptionTodo);
    res.send(true);
});

/*
Pour récupérer une todo selon un id donné
 */
app.get('/getTodo/:id', function(req,res) {
    let todo = req.session.todoList.getTodo(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.send(todo);
});

/*
Pour récupérer le nombre de todo actuellement stockées en session
 */
app.get('/todosSize', function(req,res) {
    let todoSize = req.session.todoList.getNumberOfTodos();
    res.setHeader('Content-Type', 'application/json');
    res.send({todoSize : todoSize});
});

/*
Pour mettre à jour une todo
 */
app.post('/updateTodo',urlEncodedParser,function(req,res) {
    let id = req.body.id;
    let nomTodo = req.body.nom;
    let descriptionTodo = req.body.description;
    let result = req.session.todoList.updateTodo(id,nomTodo,descriptionTodo);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
});

/*
Pour supprimer une todo selon l'id passé
 */
app.post('/deleteTodo/',urlEncodedParser,function(req,res) {
    let id = req.body.id;
    let result = req.session.todoList.deleteTodo(id);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
});

app.listen(3000, function() {
    console.log('API de gestion de todos lancée!');
});