import PropTypes from "prop-types";
import css from './UserCard.module.css'
export default function Profile({ avatar, username, tag, location, followers, views, likes }) {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    className={css.user_avatar}
                    src={avatar}
                    alt={username}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.stats_item}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{followers}</span>
                </li>
                <li className={css.stats_item}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{views}</span>
                </li>
                <li className={css.stats_item}>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{likes}</span>
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
