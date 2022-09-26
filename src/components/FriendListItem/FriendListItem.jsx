import PropTypes from "prop-types";
import {FriendList, FriendListItems, AvatarFriend, NameFriend, StatusFriends} from './FriendListItem.styled';
export default function FriendListItem({ friends }) {
    
    return (
    <FriendList>
        {friends.map(friend =>
        <FriendListItems key={friend.id}>
            <StatusFriends isOnline={friend.isOnline}></StatusFriends>
            <AvatarFriend src={friend.avatar} alt={friend.name} width="48" />
            <NameFriend>{friend.name}</NameFriend>
        </FriendListItems>
        )}
        
    </FriendList>
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