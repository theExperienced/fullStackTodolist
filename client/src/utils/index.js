import _ from 'lodash';


// const noTodoPlaceholder = ({ doneLength, undoneLength }) => {
//     if(doneLength && !undoneLength) {

//     }
//     if(doneLength && undoneLength) {
//         return {
//             donePlaceholder
//         }
//     }
// };



export const makeToggledTodos = (currentTodos, todo, isDone) => {
    const returned = isDone? {
        done: currentTodos.done.filter(({ todo_id }) => todo_id !== todo.todo_id),
        undone: currentTodos.undone.length? _.orderBy([todo, ...currentTodos.undone], ['todo_id'], ['desc']): [todo]
    }: {
        done: currentTodos.done.length? _.orderBy([todo, ...currentTodos.done], ['todo_id'], ['desc']): [todo],
        undone: currentTodos.undone.filter(({ todo_id }) => todo_id !== todo.todo_id)
    }
    console.log('makeToggledTodosile', currentTodos, todo, isDone, returned);

    return returned;
}

export const makeRemovedTodos = (currentTodos, removed_id, isDone) => {
    const returned = isDone? {
        ...currentTodos,
        done: currentTodos.done.filter(({ todo_id }) => todo_id !== removed_id)
    }: {
        ...currentTodos,
        undone: currentTodos.undone.filter(({ todo_id }) => todo_id !== removed_id)
    }

    console.log('returned', returned, currentTodos, removed_id, isDone);
    return returned;
};
