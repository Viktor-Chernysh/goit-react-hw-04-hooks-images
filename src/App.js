import { useState } from 'react';
import './App.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal/Modal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState({
    url: '',
    alt: '',
  });
  const handleSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    if (searchQuery === '') {
      return;
    }
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleGalleryItem = imageFile => {
    setCurrentImage({
      url: imageFile.largeImageURL,
      alt: imageFile.tags,
    });
    toggleModal();
  };
  const scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <img src={currentImage.url} alt={currentImage.alt} />
        </Modal>
      )}
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery
        searchQuery={searchQuery}
        clickOnImage={handleGalleryItem}
        scrollTo={scrollOnLoadButton}
      />
    </div>
  );
}
