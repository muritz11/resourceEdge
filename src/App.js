import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/App.css';
import 'remixicon/fonts/remixicon.css'
import { LandingPage } from "./components/LandingPage";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { ResetPassword } from "./components/ResetPassword";
import { ResetMain } from "./components/ResetMain";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/login' component={Login} />
          <Route exact path='/reset' component={ResetPassword} />
          <Route path='/reset-main' component={ResetMain} />
          <Route path='/dashboard' component={Dashboard} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
