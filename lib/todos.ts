import { db } from './db';

export const createTodo = async (title: string) => {
    try {
        const todo = await db.todo.create({ data: { title } });

        if (!todo) {
            throw new Error('Todo not created.');
        }

        return todo;
    } catch (error) {
        return error;
    }
};

export const getTodos = async () => {
    try {
        const todos = await db.todo.findMany();

        if (!todos) {
            throw new Error('No todos found...');
        }

        return todos;
    } catch (error) {
        return error;
    }
};
