import { useState } from "react";

function Todo({ currentTodo, setStatus, inputChange }) {
  const [editable, setEditable] = useState(false);

  return (
    <div className="flex items-center gap-2 p-2">
      <button
        onClick={() => setStatus()}
        className={`border border-amber-50 h-7 w-7 rounded-[5px] ${currentTodo.status ? "bg-green-200" : "bg-transparent"}`}
      ></button>

      {editable ? (
        <input
          className="border rounded px-1"
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
        <div onClick={() => setEditable(!editable)}> {currentTodo.work}</div>
      )}
    </div>
  );
}

export default Todo;
