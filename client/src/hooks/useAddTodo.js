import { useMutation, useQueryCache } from 'react-query';

import { addTodo } from '../api';


const useAddTodo = () => {
    const queryCache = useQueryCache();

    const [ mutateAddTodo, mutationState ] = useMutation(addTodo, {
        onMutate: newTodo => {
            queryCache.cancelQueries('todos');
            const previousTodos = queryCache.getQueryData('todos');
            queryCache.setQueryData('todos', old => ({done:old.done, undone: [newTodo, ...old.undone]}))
    
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