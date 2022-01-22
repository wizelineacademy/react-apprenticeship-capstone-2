import useDataFetch from '../../hooks/useDataFetch';
import './ImageCard.styles.css';

function ImageCard() {
  const img = useDataFetch('1998-08-09');
  return <img src={img.data.url} alt="Foto" />;
}

export default ImageCard;
