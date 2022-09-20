import PropTypes from "prop-types";
export default function Profile({ avatar, username, tag, location, followers, views, likes }) {
    return (
        <div class="profile">
            <div class="description">
                <img
                    class="user-avatar"
                    src={avatar}
                    alt={username}
                />
                <p class="name">{username}</p>
                <p class="tag">{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{followers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{views}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.number,
};
