import TodoForm from './components/TodoForm';

export default function Home() {
    return (
        <section className="flex items-center justify-center bg-gray-400 h-screen placeholder:bg-inherit">
            <div className="flex flex-col w-fit">
                <TodoForm />
                <article className="w-full">
                    <ul></ul>
                </article>
            </div>
        </section>
    );
}
