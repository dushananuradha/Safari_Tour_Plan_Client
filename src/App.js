import './App.css';
import Header  from "./Header";
import Home from "./Components/Home";
import PlanYourTour from "./Components/PlanYourTour"
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Route path="/" exact component={Home}/>
      <Route path="/PlanYourTour" exact component={PlanYourTour} />
    </div>
    </Router>
  );
}

export default App;
