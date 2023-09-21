import './App.css';
// import User from './component/User';
// import State from './component/State';
import Map from './component/Map';

function App() {
  
  return (
    // class -> className 
    // 리액트가 Javascript class 문법으로 인식하기 때문
    <div className="App">
     {/* <User/>
      <State/> */}
      <Map/>
    </div>
  );
}

export default App;
