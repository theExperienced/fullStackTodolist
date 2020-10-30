const express = require('express');
const { 
    getTodos, 
    addTodo, 
    toggleTodo, 
    removeTodo, 
    addTodoMongo,
    toggleTodoMongo,
    removeTodoMongo
 } = require('../controllers/todos');


const router = express.Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.put('/toggle', toggleTodo);
router.delete('/:todo_id', removeTodo);

////MONGO

router.post('/mongo', addTodoMongo);
router.put('/toggle/mongo', toggleTodoMongo);
router.put('/delete/mongo', removeTodoMongo);

module.exports = router;