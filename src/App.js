import Profile from "./components/Profile/Profile";
import Statistic from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendListItem/FriendListItem";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import data from "./data/data.json";
import transactions from "./data/transactions.json";
import friends from "./data/friends.json";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title={data.title} stats={data.stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
