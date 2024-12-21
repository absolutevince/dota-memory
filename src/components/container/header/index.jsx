import Logo from "./Logo";

export default function Header() {
  return (
    <header className="h-[70px] flex items-center bg-red-800 p-4 text-xl font-bold">
      <Logo />
    </header>
  );
}
