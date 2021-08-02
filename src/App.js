import './App.css';
import Header  from "./Header";
import Home from "./Components/Home";
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Route path="/" exact component={Home}/>
    </div>
    </Router>
  );
}

export default App;
