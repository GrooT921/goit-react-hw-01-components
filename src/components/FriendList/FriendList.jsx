import PropTypes from "prop-types";
import {FriendListStyle} from './FriendListItem.styled';
import  FriendListItem from './FriendListItem';
export default function FriendList  ({ friends }) {
    
    return (
    <FriendListStyle>
        {friends.map(({avatar, name, isOnline, id}) =>
            <FriendListItem
                key={id}
                isOnline={isOnline}
                avatar={avatar}
                name={name}
            />
        )}
    </FriendListStyle>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
    })),
};