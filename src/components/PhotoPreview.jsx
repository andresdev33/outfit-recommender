import classes from './PhotoPreview.module.css';

const PhotoPreview = ({ selectedImage, handleImageSubmit }) => {
    return <div className={classes['preview-container']}>
        <h2>Your Photo</h2>
        <img src={selectedImage} alt="Preview" className={classes['preview-image']} />
        <button onClick={handleImageSubmit} className={classes['upload-button']}>
            Get My Outfit
        </button>
    </div>
}

export default PhotoPreview;