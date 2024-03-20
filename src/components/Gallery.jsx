import classes from "./Gallery.module.css";

const Gallery = ({ photos }) => {
    return (
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
    );
};

export default Gallery;
