import Image from "next/image";
import Link from "next/link";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow glaassmorphism">
      <Link href="/">
        <Image src="/assets/logo.svg" width={200} height={200} alt="Logo" />
      </Link>

      <SearchForm />
    </header>
  );
}

export default Header;
