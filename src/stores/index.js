import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

function setTodoTitle(){
    const { subscribe, set } = writable('');

    return{
        subscribe,
        setTodoTitle: (value) => set(value),
    }
}

function setTodos(){
    const { subscribe, update } = writable([]);
    return {
        subscribe,
        insert: (value) => update(todos => {
            const newList = [...todos];
            const newTodo = {
                id: uuidv4(),
                title: value,
            };
            console.log([...newList, newTodo])
            return [...newList, newTodo];
        }),
        delete: (id) => update(todos => {
            return todos.filter((item)=>item.id !== id);
        })
    }
}

export const count = createCount();
export const todos = setTodos();
export const title = setTodoTitle();