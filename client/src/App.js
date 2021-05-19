import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
import Results from "./pages/results";
import Scanner from "./pages/Scanner";
import Nav from "./components/Navbar";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/scanner" component={Scanner} />
                </Switch>
      </div>
    </Router>

    // <Main />
    // <Results />
    // <Scanner />

    // <Router>
    //   <div>
    //     <Route exact path="/" component={Main} />
    //   </div>
    // </Router>
  );
}

export default App;
