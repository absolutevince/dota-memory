export default function Button({ onClick, children, value }) {
  return (
    <button
      data-value={value}
      className="rounded-sm bg-red-900 px-4 py-2 hover:bg-red-400 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
