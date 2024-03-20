import classes from './PhotoPreview.module.css';

const Avatar = ({ avatarImg }) => {
    console.log(avatarImg);
    return <div className={classes['avatar-container']}>
        <h2>Recommended</h2>
        <img src={avatarImg} alt="Recommended Outfit" className={classes['avatar-image']} />
    </div>
}

export default Avatar;