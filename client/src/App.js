import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
import Results from "./pages/results";
import Detail from "./pages/Detail";
import Scanner from "./pages/Scanner";
// import Nav from "./components/Navbar";
import History from "./pages/history";
import Background from "./img/BG2.jpg";

function App() {
  return (
    <Router style={{ backgroundImage: `url(${Background})` }} >
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/scanner" component={Scanner} />
          <Route exact path="/history" component={History} />
          <Route exact path="/details/:id" component={Detail} />
        </Switch>
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
