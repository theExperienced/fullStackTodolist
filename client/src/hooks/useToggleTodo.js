import { useMutation, queryCache } from 'react-query';
import _ from 'lodash';

import { toggleTodo } from '../api';
import { makeToggledTodos } from '../utils';



const useToggleTodo = () => {
    const [ mutateToggle, toggleState ] = useMutation(toggleTodo, {
        onMutate: ({ todo, isDone }) => {
            queryCache.cancelQueries('todos');
            const currentTodos = queryCache.getQueryData('todos');
            queryCache.setQueryData('todos', currentData => {
                const newQueryData = makeToggledTodos(currentData, todo, isDone);
                    
                return newQueryData; 
            });
            
            return currentTodos;
        },
        onError: (err, newTodo, rollback) => {
            console.log('REACT QUERY ERROR', err, newTodo, rollback)
        },
        onSettled: () => {
            queryCache.refetchQueries('todos');
        },
    });

    return { mutateToggle, toggleState };
};

export default useToggleTodo;