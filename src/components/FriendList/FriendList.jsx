import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <h2>Friends</h2>
      {friends.map((friend) => (
        <FriendListItem
          isOnline={friends.isOnline}
          name={friends.name}
          avatar={friends.avatar}
        />
      ))}
    </ul>
  );
};

export default FriendList;
