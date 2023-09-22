import './App.css';
// import User from './component/User';
// import State from './component/State';
// import Map from './component/Map';
// import Nav from './component/Header/Nav';
// import Back from './component/Main/Back';
// import Cards from './component/Main/Cards';
import CommentList from './component/CommentList';

function App() {
  return (
    <div className="App">
      {
        <CommentList/>
      }
    </div>
  );
}

export default App;
