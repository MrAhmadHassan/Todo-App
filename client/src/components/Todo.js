import {useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addTodo} from '../redux/todoSlice';

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log("Hi handleAddTodo");
    
    if (inputValue.trim()) {
      console.log(inputValue);
      
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleAddTodo}>
        <div className="col-span-full">
          <p className="mt-3 text-sm/6 text-gray-600">
            Create your notes here.
          </p>
          <div className="mt-2">
            <input
              id="todo"
              name="todo"
              type="text"
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
              required
              autoComplete="todo"
              className="block w-full rounded-md border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
