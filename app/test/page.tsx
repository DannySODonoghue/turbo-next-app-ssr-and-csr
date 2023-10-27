import React from "react";

interface toDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const serverSide = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const toDos: toDo[] = await res.json();

  return (
    <div>
      <h1>To Dos</h1>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default serverSide;
