import "./App.css";
import "./components/card/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CurrentReportContainer from "./components/current report/CurrentReportContainer";
import PreviousTrim from "./components/Previous Trim/PreviousTrim";
import Prophecy from "./components/prophecy/Prophecy";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/report" exact component={CurrentReportContainer}/>
            <Route path="/trim" exact component={PreviousTrim}/>
            <Route path='/prophecy' exact component={Prophecy}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
