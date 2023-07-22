import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        <Image src="/assets/logo.svg" width={200} height={200} alt="Logo" />
      </Link>

      <form className="relative  flex-center">
        <input
          type="text"
          placeholder="Search for a product"
          // value={searchText}
          // onChange={handleSearchChange}
          required
          className="search_input peer"
        />
        <button
          type="submit"
          className=" ml-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l "
        >
          Search
        </button>
      </form>
    </header>
  );
}

export default Header;
