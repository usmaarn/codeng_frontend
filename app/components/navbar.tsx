import { Link } from "react-router";
import { Input } from "./ui/input";
import { ButtonLink } from "./ui/link";

export default function Navbar() {
  return (
    <header className="w-full h-16 bg-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-full">
        <Link to="/" className="font-medium">
          CodeNG
        </Link>

        <div className="flex items-center gap-3">
          <form action="/search">
            <Input type="search" name="q" placeholder="Search..." />
          </form>
          <ButtonLink to="/create-post">Create Post</ButtonLink>
        </div>
      </div>
    </header>
  );
}
