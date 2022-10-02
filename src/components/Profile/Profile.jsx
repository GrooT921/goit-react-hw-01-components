import PropTypes from "prop-types";
import { ProfileUser, Description, UserAvatar, UserName, UserTag, UserLocation, UserStats, StatsItem, StatItemLabel, StatItemQuantity } from "./UserCard.styled";
export default function Profile({ avatar, username, tag, location, followers, views, likes }) {
    return (
        <ProfileUser>
            <Description>
                <UserAvatar
                    src={avatar}
                    alt={username}
                />
                <UserName>{username}</UserName>
                <UserTag>{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
            </Description>

            <UserStats>
                <StatsItem>
                    <StatItemLabel>Followers</StatItemLabel>
                    <StatItemQuantity>{followers}</StatItemQuantity>
                </StatsItem>
                <StatsItem>
                    <StatItemLabel>Views</StatItemLabel>
                    <StatItemQuantity>{views}</StatItemQuantity>
                </StatsItem>
                <StatsItem>
                    <StatItemLabel>Likes</StatItemLabel>
                    <StatItemQuantity>{likes}</StatItemQuantity>
                </StatsItem>
            </UserStats>
        </ProfileUser >
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })),
};
