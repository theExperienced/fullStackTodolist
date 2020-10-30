import React, { useCallback } from 'react';
import { useQueryCache } from 'react-query';

import { useAppState, useAppDispatch } from '../../store';
import { ActionTypes, initialState } from '../../reducerSettings';
import useAddTodo from '../../hooks/useAddTodo';

import StyledForm from './StyledForm';
import { addTodoMongo } from '../../api';


const TodoInput = () => {
    const { inputValue } = useAppState();
    const dispatch = useAppDispatch();
    const queryCache = useQueryCache();
    const { mutateAddTodo, mutationState } = useAddTodo();

    const handleChange = useCallback(e => {             
        console.log('original value', e.target.value);
        dispatch({       
            type: ActionTypes.OnInputChange,
            payload: e.target.value
        })
    }, []);

    const handleSubmit = useCallback(async e => {          
        e.preventDefault();
        const content = e.target[0].value;
        console.log('SUBMITTED');
        dispatch({
            type: ActionTypes.OnInputChange,
            payload: initialState.inputValue
        });

        try {
            const newTodo = await mutateAddTodo({content});
            console.log('added newTodo', newTodo);
            addTodoMongo(newTodo.todo_id, content)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }catch(err) {
            console.log(err);
        }
    }, []);

    return (
        <StyledForm>
            <form onSubmit={handleSubmit}>
                <input className='input' type='text' value={inputValue} onChange={handleChange} />
                <button type='submit'>go</button>
            </form>
        </StyledForm>
    );
}

export default TodoInput;