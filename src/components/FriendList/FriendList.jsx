import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <h2>FRIENDS</h2>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          name={friend.name}
          avatar={friend.avatar}
        />
      ))}
    </ul>
  );
};

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
