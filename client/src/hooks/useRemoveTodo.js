import { useMutation, useQueryCache } from 'react-query';

import { removeTodo } from '../api';
import { makeRemovedTodos } from '../utils';


const useRemoveTodo = () => {
    const queryCache = useQueryCache();

    const [ mutateRemove, removeState ] = useMutation(removeTodo, {
        onSuccess: ({ todo_id, isDone }) => {
            queryCache.setQueryData('todos', currentData => makeRemovedTodos(currentData, todo_id, isDone));
        },
        onMutate: ({ todo_id, isDone }) => {
            queryCache.cancelQueries('todos');
            const currentTodos = queryCache.getQueryData('todos');
            queryCache.setQueryData('todos', currentData => makeRemovedTodos(currentData, todo_id, isDone));
            console.log('madeMutatedTodos', currentTodos, todo_id, isDone);
            return currentTodos;
        },
        onError: (err, newTodo, rollback) => {
            console.log('REACT QUERY ERROR', err, newTodo, rollback)
        },
        onSettled: () => {
            queryCache.refetchQueries('todos');
        }
    });

    return { mutateRemove, removeState };
};

export default useRemoveTodo;