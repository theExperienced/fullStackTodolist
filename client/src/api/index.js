import axios from "axios";


// const axios = axios.create({
//     baseURL: 'http://localhost:8080'
// });



export const getTodos = async () => {
    console.log('FETCHING TODOS');
    const todos = await axios.get('/todos');
    
    console.log('GOT TODOS FROM GETDO++TODOS', todos.data)

    return todos.data;
};

export const addTodo = ({ content }) => {
    console.log('todo', content)
    const jsonedTodo = JSON.stringify({
        content
    });
    console.log('FORM SUBMITTINg', jsonedTodo);

    /////// ADD CASE FOR ADDING EXISTING TODO TO DONE LIST

    return axios.post('/todos', jsonedTodo,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        console.log('succefully added todo', res);
        return res.data;
    })
    .catch(err => console.log(err));
};

export const toggleTodo = ({ todo: { todo_id } }) => {
    console.log('toggling todo', todo_id)
    return axios.put(`/todos/toggle?todo_id=${todo_id}`)
    .then()
    .catch();
};

export const removeTodo = ({ todo_id }) => {
    return axios.delete(`/todos/${todo_id}`)
    .then()
    .catch();
};


////MONGO 


export const addTodoMongo = (todo_id, content) => {
    console.log('todo', content)
    const jsonedTodo = JSON.stringify({
        todo_id,
        content
    });
    console.log('FORM SUBMITTINg mongo', jsonedTodo);

    /////// ADD CASE FOR ADDING EXISTING TODO TO DONE LIST

    return axios.post('/todos/mongo', jsonedTodo, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        console.log('succefully added todo', res);
        
    })
    .catch(err => console.log(err));
};

export const toggleTodoMongo = (todo_id , isDone) => {
    console.log('toggling todo', todo_id, isDone)
    const data = JSON.stringify({
        todo_id,
        isDone: !isDone
    });
    
    return axios.put(`/todos/toggle/mongo`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        console.log('toggle res', res);
    })
    .catch(err => {
        console.log('error toggling mongo', err);
    });
};

export const removeTodoMongo = todo_id => {
    console.log('inside remove mongo', todo_id);
    const data = JSON.stringify({
        todo_id
    });
    console.log('inside remove mongo', data, todo_id);
    return axios.put(`/todos/delete/mongo`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        console.log('delete res', res);
    })
    .catch(err => {
        console.log('error deleting mongo');
        // console.log('error deleting mongo', err);
    });
};
