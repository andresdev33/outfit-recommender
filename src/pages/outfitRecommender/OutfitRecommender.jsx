import { useState } from 'react';
import Gallery from '../../components/Gallery';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

import PhotoPreview from '../../components/PhotoPreview';
import FileInput from '../../components/FileInput';
import classes from './OutfitRecommender.module.css';

import Avatar from "../../components/Avatar.jsx";
import { API_ENDPOINT, API_PATHS } from "../../constants/endpoints.js";
import axios from "axios";

const OutfitRecommender = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = (event) => {
    setGalleryPhotos([]);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = e.target.result;
        setSelectedImage(image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSubmit = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_ENDPOINT}${API_PATHS.POST}`, {
        image: selectedImage,
      });

      console.log('[RESPONSE] Data: ', response.data);

      setAvatar(selectedImage);
      const responsePhotos = response.data.map(item => `img/${item.source}`);
      setGalleryPhotos([selectedImage, ...responsePhotos]);
      setLoading(false);
    } catch (error) {
      console.error('[ERROR] Error uploading image:', error);
      setError('An error occurred while uploading the image. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className={classes.app}>
      <h1>Outfit Recommender</h1>
      <FileInput handleImageUpload={handleImageUpload} />
      {selectedImage && (<PhotoPreview selectedImage={selectedImage} handleImageSubmit={handleImageSubmit} />)}
      {loading && <Loader />}
      {error && <Error error={error} />}
      <Gallery photos={galleryPhotos} showOtherOptions={galleryPhotos.length > 0} />
    </div>
  );
};

export default OutfitRecommender;
