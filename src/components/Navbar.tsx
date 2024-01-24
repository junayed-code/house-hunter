import Link from "next/link";
import Button from "./shared/Button";

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70">
      <nav className="container flex items-center justify-between min-h-[60px]">
        <Link href="/">
          <h4 className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 from-[20%] to-emerald-500 text-transparent bg-clip-text select-none cursor-pointer">
            House Hunter
          </h4>
        </Link>
        <div className="flex gap-x-2">
          <Button>Sign In</Button>
          <Link href="/register">
            <Button variant="2v" outline>
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
