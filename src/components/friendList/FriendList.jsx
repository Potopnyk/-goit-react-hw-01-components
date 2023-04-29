import PropTypes from 'prop-types';
import Friend from './Friend';
import css from './friendList.module.css'


function FriendList({ friends }) {
    return (
        <ul className={css.friend__list}>
            {friends.map(friend => (

                <Friend
                    friend={friend}
                    key={friend.id}
                />

            ))}
        </ul>
    ) 
}

FriendList.protoTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
}

export default FriendList