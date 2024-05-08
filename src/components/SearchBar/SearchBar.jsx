import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const mySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = e.target.elements.query.value;
    if (!topic.trim()) {
      toast.success("Successfully toasted!");
      return;
    }
    onSubmit(topic);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={mySubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
