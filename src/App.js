import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Works from "./pages/Works";
import Navigation from "./components/Navigation";

const App = () => {
  return (
      <Router>
    <Navigation />
    <main>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/works" exact>
          <Works />
        </Route>
      </Switch>
    </main>
  </Router>
  )
}

export default App;