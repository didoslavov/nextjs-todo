import { getTodos } from '../../lib/todos';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { todos } = await getTodos();

<<<<<<< HEAD
  return (
    <section className='flex items-center justify-center bg-teal-50 h-screen placeholder:bg-inherit '>
      <div className='flex flex-col w-fit border-2 border-amber-600 p-10 bg-amber-50'>
        <div className='flex justify-center mb-5 text-2xl text-slate-900'>Create ToDo</div>
        <TodoForm />
        <article className='w-full'>
          <ul>
            {todos?.map((t) => (
              <TodoItem key={t.id} todo={t} />
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
=======
    return (
        <section className="flex flex-col items-center justify-center bg-teal-50 h-screen placeholder:bg-inherit">
            <h1 className="font-extrabold text-6xl mb-12">Todos</h1>
            <div className="flex flex-col w-fit">
                <TodoForm />
                <article className="w-full">
                    <ul>
                        {todos?.map((t) => (
                            <TodoItem key={t.id} todo={t} />
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    );
>>>>>>> 2c5779ae0d05f4defff368f7458dc00929fe7095
}
