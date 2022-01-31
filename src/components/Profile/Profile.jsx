/* eslint-disable react/no-typos */
import PropTypes from "prop-types";
import s from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={s.wrapper}>
    <h2 className={s.h2}>User</h2>
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="user avatar" className={s.avatar} />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        {Object.entries(stats).map((stat) => (
          <li className={s.item} key={stat[0]}>
            <span className={s.label}>{stat[0]}</span>
            <span className="quantity">{stat[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Profile.PropTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
