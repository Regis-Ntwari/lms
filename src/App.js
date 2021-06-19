import "./App.css";
import "./components/card/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CurrentReportContainer from "./components/current report/CurrentReportContainer";
import PreviousTrim from "./components/Previous Trim/PreviousTrim";
import Prophecy from "./components/prophecy/Prophecy";
import Login from "./components/login/Login";
import authService from "./services/auth.service";
import {PrivateRoute} from './components/private route/PrivateRoute'

function App() {
  const isAuthenticated = authService.isAuthenticated();
  return (
    <div className="App">
      <Router>
          <Switch>
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              path="/report"
              component={CurrentReportContainer}
            />
            <Route path="/trim" exact component={PreviousTrim}/>
            <Route path='/prophecy' exact component={Prophecy}/>
            <Route path="/" exact component={Login}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
