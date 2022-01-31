// import "./App.css";
// import ReactDOM from "react-dom";
import Profile from "./components/Profile";
import Statistic from "./components/Statistics";
import FriendList from "./components/FriendListItem";
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title={data.title} stats={data.stats} />
      <FriendList friends={friends} />;
    </div>
  );
}

export default App;
