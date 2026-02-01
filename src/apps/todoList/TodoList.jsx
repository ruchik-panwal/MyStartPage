import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { todos as initialTodos } from "./List";
import { AddBtn, ClearBtn } from "./TodoButtons";
import Todo from "./Todo";

function Todolist() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("TodoList");
    return saved ? JSON.parse(saved) : initialTodos;
  });

  const bottomRef = useRef(null);
  const todoRef = useRef();
  const todoBtnRef = useRef();

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

  // Animation
  const { contextSafe } = useGSAP({ scope: todoRef });

  // 2. Hover In: Padding starts, then Color follows
  const inAnimation = contextSafe(() => {
    const tl = gsap.timeline();

    tl.to(todoRef.current, {
      backgroundColor: "#e7e9e8",
      duration: 0.01,
    })
      .to(todoRef.current, {
        padding: "6px",
        duration: 0.3,
        ease: "power2.out",
      })
      .to(
        todoRef.current,
        {
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.5",
      ); // "-=0.1" starts the color slightly before padding finishes

    tl.to(
      todoBtnRef.current,
      {
        display: "flex",
        height: "60px",
        duration: 0.5,
      },
      "<",
    ); // "<" makes it start at the same time as the previous animation
  });

  // 3. Hover Out: Reset everything immediately
  const outAnimation = contextSafe(() => {
    const tl = gsap.timeline();

    tl.to(todoRef.current, {
      padding: "0px",
      duration: 0.5,
      ease: "power2.in",
    });

    tl.to(
      todoBtnRef.current,
      {
        height: "0px",
        duration: 0.5,
        ease: "power2.in",
      },
      "<",
    )
      .to(todoBtnRef.current, {
        display: "none",
        duration: 0.02,
        ease: "power2.in",
      })
      .to(todoRef.current, {
        backgroundColor: "#121212",
        duration: 0.01,
      }); // "<" makes it start at the same time as the previous animation
  });

  return (
    <div
      onMouseEnter={inAnimation}
      onMouseLeave={outAnimation}
      className="flex flex-col gap-2 bg-mainWhite h-87.5 w-full rounded-[15px] overflow-hidden box-border"
      ref={todoRef}
    >
      {/* TodoList Container */}
      <div className="flex flex-col items-center bg-containerBg h-full w-full p-3 rounded-[15px] overflow-y-scroll">
        <div className="text-gray-400 text-[1rem]">T O D O&nbsp;&nbsp;&nbsp;L I S T</div>

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
      <div
        className="h-0 justify-between items-center gap-1.5 hidden"
        ref={todoBtnRef}
      >
        <AddBtn addTodo={() => addTodo()} />
        <ClearBtn clrTodo={() => clrTodo()} />
      </div>
    </div>
  );
}

export default Todolist;
