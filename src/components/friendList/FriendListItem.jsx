
import PropTypes from 'prop-types';
import css from './friendList.module.css'
import { HiOutlineStatusOnline } from 'react-icons/hi';

function FriendListItem({ props }) {
    const {
        avatar,
        name,
        isOnline
    } = props

    return (
        <div>
            <span className={`${css[isOnline]}`}><HiOutlineStatusOnline /></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </div>
    )
}

FriendListItem.propTypes = {
    props: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    })
}

export default FriendListItem