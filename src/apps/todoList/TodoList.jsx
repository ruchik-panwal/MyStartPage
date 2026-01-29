import { useState } from "react";
import { todos as initialTodos } from "./List"; // Rename for clarity
import Todo from "./Todo";
import AddBtn from "./AddBtn";

function Todolist() {
  const [todos, setTodos] = useState(initialTodos);

  function inputChange(val, index) {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], work: val };
    setTodos(newTodos);
  }

  function statusChange(index) {
    const newTodos = [...todos];
    newTodos[index] = {
      ...newTodos[index],
      status: !newTodos[index].status,
    };
    setTodos(newTodos);
  }

  return (
    <div className="bg-mainWhite h-full w-full rounded-[10px] overflow-hidden">
      {/* TodoList Container */}
      <div className="bg-containerBg h-full w-full">
        {todos.map((todo, ind) => {
          return (
            <Todo
              key={ind}
              currentTodo={todo}
              inputChange={(val) => inputChange(val, ind)}
              setStatus={() => statusChange(ind)}
            />
          );
        })}
      </div>

      {/* Button Container */}
      <div></div>
    </div>
  );
}

export default Todolist;
