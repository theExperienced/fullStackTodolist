import React, { useCallback } from 'react';
import useToggleTodo from '../../hooks/useToggleTodo';
import useRemoveTodo from '../../hooks/useRemoveTodo';

import StyledTodo from './StyledTodo';
import { toggleTodoMongo, removeTodoMongo } from '../../api';


const Todo = ({ todo_id, content, isDone }) => {
    console.log('rendering indivtodo_idual todo', todo_id, isDone);
    const { mutateToggle, toggleState } = useToggleTodo();
    const { mutateRemove, removeState } = useRemoveTodo();

    const handleToggle = async () => {
        console.log('HANDLING MUTATE', todo_id, isDone)
        try {
            const todo = await mutateToggle({
                todo: {todo_id, content},
                isDone: !!isDone
            });

            console.log('awaited todo', todo);
            
            toggleTodoMongo(todo_id, isDone)
            .then(res => {
                console.log('res toggle ', res)
            })
            .catch(err => {
                console.log('err toggle ', err)
            });
        }catch(err) {
            console.log(err);
        }

    };

    const handleRemove = async () => {
        try {
            const todo = await mutateRemove({todo_id, isDone: !!isDone});
            console.log('was to remove', todo)
            
            removeTodoMongo(todo_id)
            .then(res => {
                console.log('res remove ', res)
            })
            .catch(err => {
                console.log('err remove ', err)
            });
        }catch(err) {
            console.log(err);
        }
        
    };

    return (
        <StyledTodo>
            <p className='content'>{content}</p>
            {/* <p className='id'>{todo_id}</p> */}
            <div className='buttons'>
                <button className='toggle' onClick={handleToggle}>{isDone? 'undone': 'done'}</button>
                <button className='remove' onClick={handleRemove}>remove</button>
            </div>
        </StyledTodo>
    );
}

export default Todo;