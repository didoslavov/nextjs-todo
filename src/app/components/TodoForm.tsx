'use client';

import { useRef } from 'react';
import { createTodoAction } from '../_actions';

const TodoForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const formAction = async (formData: FormData) => {
        const title = formData.get('title');

        console.log(title);

        if (typeof title !== 'string' || !title) {
            return;
        }

        await createTodoAction(title);
        formRef.current?.reset();
    };

    return (
        <form ref={formRef} action={formAction} className="flex space-x-6 mb-12">
            <input
                name="title"
                type="text"
                className="rounded-md p-2 bg-teal-100 placeholder:text-teal-600"
                placeholder="Todo..."
            />
            <button className="rounded bg-teal-200 text-teal-900 p-2">Add todo</button>
        </form>
    );
};

export default TodoForm;
