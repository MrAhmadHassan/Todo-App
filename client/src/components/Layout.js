import Todo from "./Todo";
import DisplayTodos from "./Displaytodos";

export default function Layout() {
  return (
    <>
      <div className="flex items-center justify-center h-32">
        <h2 className="text-2xl font-bold mb-4">KEEP NOTES</h2>
      </div>
      <Todo />
      <DisplayTodos />
    </>
  );
}
