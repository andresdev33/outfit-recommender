import { useState } from 'react';
import Gallery from '../../components/Gallery';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

import PhotoPreview from '../../components/PhotoPreview';
import FileInput from '../../components/FileInput';
import classes from './OutfitRecommender.module.css';

import { pantalones, remeras, zapatos } from "../../constants/clothes.js";
import Avatar from "../../components/Avatar.jsx";

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
        setSelectedImage(image); // Ready in Base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSubmit = async () => {
    if (!selectedImage) return;

    // TODO:  remove this array
    const images = [
        ...remeras,
        ...pantalones,
        ...zapatos
    ];

    setLoading(true);
    setError(null);

    // TODO:  remove this timeout and replace with the commented code below
    setTimeout(() => {
      setLoading(false);
      setAvatar(selectedImage);
      setGalleryPhotos([...galleryPhotos, ...images]);
    }, 4000);

    // try {
    //   const response = await axios.post('AI_RECOMMENDER_ENDPOINT', {
    //     image: selectedImage,
    //   });
    //   console.log('Image uploaded successfully:', response.data);
    // TODO: process response data and add it to the array
    //   setAvatar(response.data.avatar);
    //   setGalleryPhotos([...galleryPhotos, response.avatar.images]); // From the API results
    //   setLoading(false);
    // } catch (error) {
    //   console.error('Error uploading image:', error);
    //   setError('An error occurred while uploading the image. Please try again.');
    //   setLoading(false);
    // }
  };

  return (
      <div className={classes.app}>
        <h1>Outfit Recommender</h1>
        <FileInput handleImageUpload={handleImageUpload}/>
        {selectedImage && (<PhotoPreview selectedImage={selectedImage} handleImageSubmit={handleImageSubmit}/>)}
        {loading && <Loader/>}
        {error && <Error error={error}/>}
        {avatar && <Avatar avatarImg={avatar}/>}
        {avatar && <h2>Other Options</h2>}
        <Gallery photos={galleryPhotos}/>
      </div>
  );
};

export default OutfitRecommender;
