import { useQuery } from 'react-query';
import { getTodos } from '../api';

const useTodos = () => {
    return useQuery('todos', getTodos, {
        refetchAllOnWindowFocus: false,
    });
};

export default useTodos;