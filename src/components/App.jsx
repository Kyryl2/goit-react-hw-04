import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  const handleSubmit = () => {
    console.log("Hello,world!");
    console.log("Hello,world!");
  };

  return <SearchBar onSubmit={handleSubmit} />;
};
export default App;
