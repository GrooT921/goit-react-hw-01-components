import PropTypes from "prop-types";
import {FriendListItems, AvatarFriend, NameFriend, StatusFriends} from './FriendListItem.styled';

export default function FriendListItem ({ avatar, name, isOnline }) {
    return (
        <FriendListItems>
            <StatusFriends isOnline={isOnline}></StatusFriends>
            <AvatarFriend src={avatar} alt={name} width="48" />
            <NameFriend>{name}</NameFriend>
        </FriendListItems>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};