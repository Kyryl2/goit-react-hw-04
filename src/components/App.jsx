import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import fetchData from "../service/api";

import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadmoreBtn/LoadMoreBtn";

const App = () => {
  const [value, setValue] = useState("");
  const [photos, setPhotos] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const handleSearch = async (query) => {
    try {
      setPhotos([]);
      setError(false);
      setLoading(true);
      setPage(2);
      const {
        data: { results },
      } = await fetchData(query, page);
      setSubmit(true);
      setPhotos(results);
      console.log(photos);
      setValue(query);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    setPage((prev) => prev + 1);

    const ddata = await fetchData(value, page);
    // setPhotos((prev) => {
    //   [...prev, ...ddata.data.results];
    // });
    setPhotos([...photos, ...ddata.data.results]);

    console.log(photos);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {submit && <ImageGallery items={photos} />}
      {photos && <LoadMoreBtn onClick={() => handleClick()} />}
    </div>
  );
};
export default App;
