import classes from "./Gallery.module.css";

const Gallery = ({photos, showOtherOptions = false}) => {
    return (
        <>
            {showOtherOptions && <h2>Other Options</h2>}
            <div className={classes.gallery}>
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo.source ?? photo}
                        alt={`Photo ${index}`}
                        title={photo.message ?? `${photo.replace('.png', '').replace('img/', '')}`}
                    />
                ))}
            </div>
        </>
    );
};

export default Gallery;
