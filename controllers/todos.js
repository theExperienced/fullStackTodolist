const pool = require('../PostgreSQL/db');
// const { ObjectId } = require('mongodb');
const _ = require('lodash');
const { getDb } = require('../mongoDB/db');

exports.getTodos = async (req, res, next) => {
    let todos;
    // console.log('getting todos');

    try {
        todos = await pool.query('SELECT * FROM todos ORDER BY todo_id DESC');
            
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
                          
        // console.log('response from get totods', todosByDone);
        res.status(200).json(todosByDone);
    } catch (err) {
        // console.log('getting todos error', err);
        res.status(404).json(err);
    }
};

exports.addTodo = async (req, res, next) => {
    const { content } = req.body;
    let todo;

    try {
        // console.log('adding todo GOODDDD', content,todo);
        const newTodo = await pool.query(
          'INSERT INTO todos (content) VALUES($1) RETURNING *',
          [content]
        );
    
        todo = newTodo.rows[0];
        res.status(200).json(todo);
    } catch (err) {
        
        // console.log('adding todoERRRRR', err);
        res.status(404).json(err);
    }
};

exports.toggleTodo = async (req, res, next) => {
    const { todo_id } = req.query;

    try {
        // console.log('TOGGLING TODO MONGO', todo_id, req.query)
        const newTodo = await pool.query(
            "UPDATE todos SET done = NOT done WHERE todo_id = $1 RETURNING *",
          [todo_id]
        );
    
        // console.log('TOGGLING TODO MONGO', todo_id, req.query)
        res.status(200).json(newTodo.rows[0]);
    } catch (err) {
        // console.log('TOGGLING  bla TODO ERR', err, todo_id)   
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
    
        // console.log('deleteing', todo_id, req.params);
        res.json(newTodo.rows[0]);
    } catch (err) {
        res.json(err);
    }
};


//////MONGO




exports.addTodoMongo = async (req, res, next) => {

    const { todo_id, content } = req.body;
    // console.log('adding one mongo', typeof todo_id);
    
    getDb().db()
    .collection('todos')
    .insertOne({_id: todo_id, content, done: false}, {$upsert: true})
    .then(response => {
        // console.log('success add mongo', response);
        return res.status(200).json(response);
    })
    .catch(err => {
        // console.log('err', err);
        res.status(404).json(err)
    });
};

exports.toggleTodoMongo = async (req, res, next) => {
    console.log('toggle mongo', req.body);
    const { todo_id, isDone } = req.body;
    
    return getDb().db()
    .collection('todos')
    .updateOne({_id: todo_id}, {$set: { done: isDone}})
    .then(response => {
        console.log('toggle mongo success', todo_id);
        return res.status(200).json(response);
    })
    .catch(err => res.status(404).json(err));
};

exports.removeTodoMongo = async (req, res, next) => {
    const { todo_id } = req.body;
    console.log('deleteing', todo_id);
    
    getDb().db()
    .collection('todos')
    .deleteOne({_id: todo_id})
    .then(response => {
        // console.log('delete res', response)
        res.status(200).json(response);
    })
    .catch(err => res.status(404).json(err));
};








