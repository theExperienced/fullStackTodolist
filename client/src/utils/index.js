import _ from 'lodash';


export const makeToggledTodos = (currentTodos, todo, isDone) => {
    return isDone? {
        done: currentTodos.done.filter(({ todo_id }) => todo_id !== todo.todo_id),
        undone: currentTodos.undone.length? _.orderBy([todo, ...currentTodos.undone], ['todo_id'], ['desc']): [todo]
    }: {
        done: currentTodos.done.length? _.orderBy([todo, ...currentTodos.done], ['todo_id'], ['desc']): [todo],
        undone: currentTodos.undone.filter(({ todo_id }) => todo_id !== todo.todo_id)
    };
}

export const makeRemovedTodos = (currentTodos, removed_id, isDone) => {
    return isDone? {
        ...currentTodos,
        done: currentTodos.done.filter(({ todo_id }) => todo_id !== removed_id)
    }: {
        ...currentTodos,
        undone: currentTodos.undone.filter(({ todo_id }) => todo_id !== removed_id)
    };
};
