import { useState } from "react";

function Todo({ currentTodo, setStatus, inputChange }) {
  const [editable, setEditable] = useState(false);

  return (
    <div className="flex gap-3 p-2 w-full">
      <button
        onClick={() => setStatus()}
        className={`border border-amber-50 h-6 w-6 rounded-[5px] ${currentTodo.status ? "bg-green-200" : "bg-transparent"}`}
      ></button>

      {editable ? (
        <input
          className="focus:border-none rounded px-1 text-mainWhite w-full"
          type="text"
          value={currentTodo.work}
          onChange={(e) => {
            inputChange(e.target.value);
          }}
          onBlur={() => setEditable(false)}
          onKeyDown={(e) => e.key === "Escape" && setEditable(false)}
          autoFocus
        />
      ) : (
        <div className="text-mainWhite w-full hover:cursor-text" onClick={() => setEditable(!editable)}> {currentTodo.work}</div>
      )}
    </div>
  );
}

export default Todo;
