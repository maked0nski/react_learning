import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <div className={'container'}>
        <Users/>
        <Posts/>
        <Comments/>
    </div>
  );
}

export default App;