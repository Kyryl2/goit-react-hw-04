import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, onBig }) => {
  return (
    <ul className={s.list}>
      {items.map((img) => (
        <li onClick={() => onBig(img)} className={s.item} key={img.id}>
          <ImageCard
            src={img.urls.small}
            src_regular={img.urls.regular}
            alt={img.alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
