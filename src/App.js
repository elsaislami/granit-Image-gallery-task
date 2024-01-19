import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import SearchBarInput from './components/inputs/SearchBarInput';
import { getImages } from './api';
import GalleryList from './components/GalleryList';
import ImageModal from './components/ImageModal';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [selectedServer, setSelectedServer] = useState('imgur');

  const fetchImages = async () => {
      await getImages(searchText,currentPage,selectedServer).then((res) => {
        if(res.status === 200) setSearchResults((prevResults) => [...prevResults, ...res.data.photos]);
      }).catch((error) => {
          console.log(error);
      })
  };

  const handleSearch = () => {
    setSearchResults([])
    fetchImages();
    setCurrentPage(1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseViewer = () => {
    setSelectedImage(null);
  };

  const handleFetchMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (currentPage > 1) {
      fetchImages();
    }
  }, [currentPage]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Granit Image Gallery Task</code>
        </p>
      </header>
      <div className='body-container'>
        <SearchBarInput onSearch={handleSearch} searchText={searchText} selectedServer={selectedServer} setSearchText={setSearchText} setSelectedServer={setSelectedServer} />
        <GalleryList images={searchResults} onImageClick={handleImageClick} fetchMoreImages={handleFetchMore}/>
        {selectedImage && <ImageModal image={selectedImage} onClose={handleCloseViewer} />}
      </div>
    </div>
  );
}

export default App;
