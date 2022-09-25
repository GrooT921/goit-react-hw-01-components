import PropTypes from "prop-types";
import css from './FriendListItem.module.css'
export default function FriendListItem({ friends }) {
    
    return (
        <ul className={css.friend_list}>
            {friends.map(friend =>
            <li className={css.item} key={friend.id}>
                    <span className={css.status} style={{ backgroundColor: `${friend.isOnline ? "green" : "red"}`}}></span>
                    <img className={css.avatar_friends} src={friend.avatar} alt={friend.name} width="48" />
                <p className={css.name_friends}>{friend.name}</p>
            </li>
        )}
        
    </ul>
    )
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
    })),
};