import PropTypes from "prop-types";
export default function FriendListItem({ friends }) {
    return (
        <ul class="friend-list">
            {friends.map(friend =>
            <li class="item" key={friend.id}>
                    <span class="status">{friend.isOnline}</span>
                    <img class="avatar-friends" src={friend.avatar} alt={friend.name} width="48" />
                <p class="name-friends">{friend.name}</p>
            </li>
        )}
        
    </ul>
    )
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.string),
};