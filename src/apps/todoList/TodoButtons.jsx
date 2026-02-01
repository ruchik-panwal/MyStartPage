export function AddBtn({ addTodo }) {
  return (
    <button
      className="flex-1/2 h-full w-full rounded-[15px] text-[#34c85a] bg-mainWhite cursor-pointer border border-[#34c85a] hover:text-mainWhite hover:bg-[#34c85a]"
      onClick={() => addTodo()}
    >
      Add
    </button>
  );
}

export function ClearBtn({ clrTodo }) {
  return (
    <button
      className="flex-1/2 h-full w-full rounded-[15px] text-mainWhite bg-[#ff7575] hover:bg-[#ff3e3e] cursor-pointer"
      onClick={() => clrTodo()}
    >
      Clear
    </button>
  );
}
