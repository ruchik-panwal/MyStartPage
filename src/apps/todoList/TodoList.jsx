import { useState, useRef, useEffect } from "react";

import { todos as initialTodos } from "./List";
import { AddBtn, ClearBtn } from "./TodoButtons";
import Todo from "./Todo";

function Todolist() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("TodoList");
    return saved ? JSON.parse(saved) : initialTodos;
  });

  const bottomRef = useRef(null);
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [todos.length]);

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    setTodos([...todos, { work: "", status: false }]);
  }

  function clrTodo() {
    const newTodos = [...todos];
    setTodos(
      newTodos.filter((todo) => {
        return todo.status == false;
      }),
    );
  }

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
    <div className="flex flex-col gap-2 bg-mainWhite h-87.5 w-full rounded-[15px] overflow-hidden box-border p-1.5">
      {/* TodoList Container */}
      <div className="bg-containerBg h-full w-full p-2 rounded-[15px] overflow-y-scroll">
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

        <div ref={bottomRef} className="h-1" />
      </div>

      {/* Button Container */}
      <div className="flex h-15 justify-between items-center gap-1.5">
        <AddBtn addTodo={() => addTodo()} />
        <ClearBtn clrTodo={() => clrTodo()} />
      </div>
    </div>
  );
}

export default Todolist;
