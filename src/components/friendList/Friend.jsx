import React from "react"
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './friendList.module.css'

const Friend = ({ friend }) => (
    <li className={css.item}>
        <FriendListItem
        props={friend}
        />
    </li>
)

export default Friend;

Friend.protoTypes = {
    friend: PropTypes.object
}