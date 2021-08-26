//import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso intro react', completed: false },
  { text: 'Practicar inglés', completed: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map( todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
        </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
