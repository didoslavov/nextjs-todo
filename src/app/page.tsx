import { getTodos } from '../../lib/todos';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

export const dynamic = 'force-dynamic';

export default async function Home() {
    const { todos } = await getTodos();

    return (
        <section className="flex items-center justify-center bg-teal-50 h-screen placeholder:bg-inherit">
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
}
