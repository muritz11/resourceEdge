import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/App.css';
import 'remixicon/fonts/remixicon.css'
import { LandingPage } from "./components/LandingPage";


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path='/' component={LandingPage} />
          {/* <Route path='/dish/:dishId' component={Dish} />
          <Route exact path='/kitchens' component={KitchensPage} />
          <Route path='/kitchen-profile/:kitId' component={KitchenProfile} /> */}
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
