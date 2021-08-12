import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Works from "./pages/Works";
import Navigation from "./components/Navigation";
import ToggleBtn from "components/ThemeToggleButton";
import { ThemeContext } from "Context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "globaltheme light" : "globaltheme dark"}>
      <Router>
        <Navigation />
        <ToggleBtn />
        <main>
          <Switch>
            <div>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/works" exact>
                <Works />
              </Route>
            </div>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
