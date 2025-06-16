import { Link } from "react-router";
import { ButtonLink } from "./ui/link";
import SearchModal from "./search-modal";

export default function Navbar() {
  return (
    <header className="w-full h-[80px] bg-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-full gap-5">
        <Link to="/" className="font-bold text-xl text-primary">
          CodeNG
        </Link>

        <SearchModal />

        <div className="flex items-center gap-3">
          <ButtonLink to="/forum" variant="ghost">
            Forum
          </ButtonLink>
          <ButtonLink to="/login" variant="ghost">
            Login
          </ButtonLink>
          <ButtonLink to="/login">Become a member</ButtonLink>
        </div>
      </div>
    </header>
  );
}
