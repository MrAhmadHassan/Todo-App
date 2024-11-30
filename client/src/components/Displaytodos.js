import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice";
function DisplayTodos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  return (
    // <div className="max-w-md mx-auto mt-10">
    <div className="wid">
      <ul className="bg-white shadow-md rounded-lg">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 border-b last:border-b-0"
            >
              <p className="text">{todo.text}</p>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500">No to-dos available</li>
        )}
      </ul>
    </div>
  );
}

export default DisplayTodos;
