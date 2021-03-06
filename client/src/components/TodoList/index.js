import React, { memo } from 'react';
import Todo from '../Todo';

import StyledList from './StyledList';


const TodoList = ({ isDone, todos }) => {
    return (
        <StyledList>
            <h2>{isDone? 'done': 'undone'}</h2>
            <div className='todoList'>
                {
                    todos.length? 
                     todos.map(({todo_id, content}) => {
                        return <Todo key={todo_id} todo_id={todo_id} content={content} isDone={isDone}/>
                    }):null
                }
            </div>
        </StyledList>
    );
}

export default memo(TodoList);