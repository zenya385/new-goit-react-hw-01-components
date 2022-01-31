// import "./App.css";
// import ReactDOM from "react-dom";
import Profile from "./components/Profile";
import user from "./data/user.json";

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
    </div>
  );
}

export default App;
