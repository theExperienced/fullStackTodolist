const pool = require('../PostgreSQL/db');
const _ = require('lodash');
const { getDb } = require('../mongoDB/db');

exports.getTodos = async (req, res, next) => {
    try {
        const todos = await pool.query('SELECT * FROM todos ORDER BY todo_id DESC');
            
        const  keyMap = {
            'false': 'undone',
            'true': 'done'
        };

        const todosByDone = _.mapKeys(_.mapValues(_.groupBy(todos.rows, 'done'),
                          clist => clist.map(todo => _.omit(todo, 'done'))), (value, key) => keyMap[key]); 
        if(!todosByDone.done) {
            todosByDone.done = [];
        }
        if(!todosByDone.undone) {
            todosByDone.undone = [];
        }

        res.status(200).json(todosByDone);
    } catch (err) {
        res.status(404).json(err);
    }
};

exports.addTodo = async (req, res, next) => {
    const { content } = req.body;

    try {
        const newTodo = await pool.query(
          'INSERT INTO todos (content) VALUES($1) RETURNING *',
          [content]
        );
    
        const todo = newTodo.rows[0];
        res.status(200).json(todo);
    } catch (err) {
        res.status(404).json(err);
    }
};

exports.toggleTodo = async (req, res, next) => {
    const { todo_id } = req.query;

    try {
        const newTodo = await pool.query(
            "UPDATE todos SET done = NOT done WHERE todo_id = $1 RETURNING *",
          [todo_id]
        );
    
        res.status(200).json(newTodo.rows[0]);
    } catch (err) { 
        res.status(404).json(err);
    }
};

exports.removeTodo = async (req, res, next) => {
    const { todo_id } = req.params;

    try {
        const newTodo = await pool.query(
          'DELETE from todos WHERE todo_id = $1 RETURNING *',
          [todo_id]
        );
    
        res.json(newTodo.rows[0]);
    } catch (err) {
        res.json(err);
    }
};


//////MONGO




exports.addTodoMongo = async (req, res, next) => {
    const { todo_id, content } = req.body;
    
    getDb().db()
    .collection('todos')
    .insertOne({_id: todo_id, content, done: false}, {$upsert: true})
    .then(response => res.status(200).json(response))
    .catch(err => res.status(404).json(err));
};

exports.toggleTodoMongo = async (req, res, next) => {
    console.log('toggle mongo', req.body);
    const { todo_id, isDone } = req.body;
    
    return getDb().db()
    .collection('todos')
    .updateOne({_id: todo_id}, {$set: { done: isDone}})
    .then(response => res.status(200).json(response))
    .catch(err => res.status(404).json(err));
};

exports.removeTodoMongo = async (req, res, next) => {
    const { todo_id } = req.body;
    
    getDb().db()
    .collection('todos')
    .deleteOne({_id: todo_id})
    .then(response => res.status(200).json(response))
    .catch(err => res.status(404).json(err));
};








