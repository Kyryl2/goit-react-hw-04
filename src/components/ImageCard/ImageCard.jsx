import s from "./ImageCard.module.css";
const ImageCard = ({ src, alt, src_regular }) => {
  return (
    <div className={s.wrapper}>
      <img src={src} alt={alt} className={s.img} />
    </div>
  );
};

export default ImageCard;
