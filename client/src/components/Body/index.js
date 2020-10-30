import React from 'react';
import useTodos from '../../hooks/useTodos';

import TodoList from '../TodoList';

import StyledBody from './StyledBody';

const renderBody = (status, todos) => {
    return status === "loading" ? (
        "Loading..."
        ) : status === "error" ? (
            <div className='errorDiv'>
                <span>There was an error fetching todos, here's a juggling monkey instead</span>
                <img src='https://animalcorner.org/wp-content/uploads/2015/02/monkey_juggles.gif' />
            </div>    

        ) : (
            <>
                <TodoList todos={todos.undone} />
                <TodoList isDone todos={todos.done} />
            </>
        )
}

const Body = () => {
    const { data: todos, status, error, isFetching } = useTodos();       ////ASSUMING TODOS IS AN OBJECT SPLIT INTO DONE AND UNDONE
    console.log('TODOS IN BODY', todos, status, isFetching);
    // const { done, undone } = todos;

    return (
        <StyledBody>
            {renderBody(status, todos)}
        </StyledBody>
    );
}

export default Body;