import { PropTypes } from 'prop-types';
import s from './ImageGallery.module.css';

export default function ImageGalleryItem({ searchResults, onClick }) {
  return searchResults.map(el => {
    return (
      <li className={s.ImageGalleryItem} key={el.id}>
        <img
          onClick={() => {
            onClick(el);
          }}
          src={el.webformatURL}
          alt={el.tags}
          className={s.ImageGalleryItemImage}
        />
      </li>
    );
  });
}

ImageGalleryItem.propTypes = {
  searchResults: PropTypes.array,
  onClick: PropTypes.func,
};
