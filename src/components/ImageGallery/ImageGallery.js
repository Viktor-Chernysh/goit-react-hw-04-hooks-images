import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';
import Button from '../Button/Button';
import FetchImages from '../../services/image-finder-api';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23234796-47fbd745329069e6b0b2bf0fd';
const newFetchImages = new FetchImages(BASE_URL, API_KEY);
export default function ImageGallery({ searchQuery, scrollTo, clickOnImage }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    newFetchImages.page = 1;
    newFetchImages.searchPhotos(searchQuery, 12).then(results => {
      if (results.length === 0) {
        alert('There no pics anymore!!!');
        return;
      }
      setSearchResults(prevRes => [...prevRes, ...results]);
      setIsLoading(false);
      scrollTo();
    });
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setIsLoading(true);

    newFetchImages.searchPhotos(searchQuery, 12).then(searchResults => {
      if (searchResults.length === 0) {
        setIsLoading(false);
        alert('No results');
        return;
      } else {
        setSearchResults(searchResults);
        setIsLoading(false);
      }
    });
  }, [searchQuery]);

  return (
    <>
      <ul className={s.ImageGallery}>
        <ImageGalleryItem
          searchResults={searchResults}
          onClick={clickOnImage}
        />
      </ul>
      {isLoading && (
        <Loader
          type="Bars"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
          className={s.Loader}
        />
      )}
      {searchResults.length > 0 && <Button onClick={handleLoadMore} />}
    </>
  );
}
ImageGallery.propTypes = {
  clickOnImage: PropTypes.func,
};
