export default function Button({ onClick, className, children, value }) {
  return (
    <button
      data-value={value}
      className={"rounded-sm bg-red-900 px-4 py-2 hover:bg-red-400 cursor-pointer " + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
