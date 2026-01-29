export function AddBtn({ addTodo }) {
  return (
    <button
      className="flex-1/2 h-full w-full rounded-[15px] bg-[#498F4C] text-mainWhite cursor-pointer"
      onClick={() => addTodo()}
    >
      Add
    </button>
  );
}

export function ClearBtn({clrTodo}) {
  return (
    <button className="flex-1/2 h-full w-full rounded-[15px] text-mainWhite bg-[#B46B6B] cursor-pointer"
    onClick={() => clrTodo()}>
      Clear
    </button>
  );
}
