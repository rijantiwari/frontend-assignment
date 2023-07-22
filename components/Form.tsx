const Form = ({ handleSearchChange, handleSearchSubmit, searchQuery }) => {
  return (
    <form className="relative flex-center " onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search for a product"
        value={searchQuery}
        onChange={handleSearchChange}
        required
        className="search_input peer"
      />
      <button
        type="submit"
        className=" ml-7 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M15.5 14h-.79l-.28-.27C16.41 12.16 17 10.66 17 9c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.66 0 3.17-.59 4.36-1.57l.27.28v.79l5 4.99L20 19l-4.5-4.5zm-8 0C6.01 14 4 11.99 4 9s2.01-5 3.5-5 3.5 2.01 3.5 5-2.01 5-3.5 5z" />
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
};

export default Form;
