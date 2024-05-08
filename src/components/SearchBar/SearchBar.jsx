const SearchBar = () => {
  const mySubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <form onSubmit={mySubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          //   name="query"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
