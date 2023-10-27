"use client";

import React, { useEffect, useState } from "react";

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todos = () => {
  let [todo, setTodo] = useState<ToDo>({
    userId: 0,
    id: 0,
    title: "",
    completed: false,
  });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, []);
  return (
    <>
      <button onClick={() => console.log("clicked")}>{todo.title}</button>
    </>
  );
};

export default Todos;
