import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, onOpen }) => {
  const openModal = () => {
    onOpen();
  };
  return (
    <ul className={s.list}>
      {items.map((img) => (
        <li onClick={openModal} className={s.item} key={img.id}>
          <ImageCard
            src={img.urls.small}
            src_regular={img.urls.regular}
            alt={img.alt_description}
            onClick={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
