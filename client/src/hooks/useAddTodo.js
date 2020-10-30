import { useMutation, useQueryCache } from 'react-query';

import { addTodo } from '../api';


const useAddTodo = () => {
    const queryCache = useQueryCache();

    const [ mutateAddTodo, mutationState ] = useMutation(addTodo, {
        onMutate: newTodo => {
            console.log('MUTATING');
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            queryCache.cancelQueries('todos')
    
            // Snapshot the previous value
            const previousTodos = queryCache.getQueryData('todos')
    
            // Optimistically update to the new value
            queryCache.setQueryData('todos', old => ({done:old.done, undone: [newTodo, ...old.undone]}))
    
            // Return the snapshotted value
            return () => queryCache.setQueryData('todos', previousTodos)
        },
        onError: (err, newTodo, rollback) => {
            console.log('REACT QUERY ERROR', err, newTodo, rollback)
        },
        onSettled: () => {
            queryCache.invalidateQueries('todos');
        },
    });

    return { mutateAddTodo, mutationState };
};

export default useAddTodo;