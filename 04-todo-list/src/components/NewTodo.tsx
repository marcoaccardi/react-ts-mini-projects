import React, { useRef } from "react";
import "./NewTodo.css";
interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

export const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler} style={{ padding: "2rem" }}>
      <div style={{ padding: "2rem 0" }}>
        <label style={{ padding: "0 1.5rem" }} htmlFor='todo-text'>
          Todo Text
        </label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};
