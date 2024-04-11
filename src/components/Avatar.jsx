import classes from './PhotoPreview.module.css';

const Avatar = ({ avatarImg }) => {
    return <div className={classes['avatar-container']}>
        <h2>Recommended Outfit</h2>
        <img src={avatarImg} alt="Recommended Outfit" className={classes['avatar-image']} />
    </div>
}

export default Avatar;