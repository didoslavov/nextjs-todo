'use client';

import { useTransition } from 'react';
import { Todo } from '@prisma/client';
import { updateTodoAction } from '../_actions';
import { RiDeleteBin7Line } from 'react-icons/ri';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div className='flex gap-4'>
      <RiDeleteBin7Line
        size={25}
        className='text-teal-900 mt-2 hover:cursor-pointer hover:text-pink-950'
      />
      <li
        onClick={() => startTransition(() => updateTodoAction(todo.id, !todo.isCompleted))}
        className={`${
          todo.isCompleted
            ? 'bg-teal-900 transition-colors duration-300 text-teal-100 hover:bg-teal-700'
            : 'transition-colors duration-300 hover:bg-teal-200'
        } flex justify-between mb-4 border border-teal-600 py-2 px-4 rounded cursor-pointer gap-6`}>
        <p>{todo.title}</p>
        <span>{todo.updatedAt.toISOString()}</span>
      </li>
    </div>
  );
};

export default TodoItem;
