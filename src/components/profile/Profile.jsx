import css from './Profile.module.css'
import PropTypes from 'prop-types';

export default function Profile(props) {
const {
    avatar,
    username,
    tag,
    location,
    stats } = props
return (
<div className="profile">
    <div className={css.description}>
    <img
        src={avatar}
        alt="User avatar"
        class={css.avatar}
    />
    <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
    <li>
    <span className={css.label}>Followers</span>
        <br></br>
    <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
        <span className={css.label}>Views </span>
        <br></br>
        <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
        <span className={css.label}>Likes</span>
        <br></br>
        <span className={css.quantity}>{stats.likes}</span>
    </li>
    </ul>
</div>
    );
};

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number)
}
