import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Project from "components/Project";
import projects from "data";

const Works = () => {
  const finalURL = (workslug) => {
    return "/works/" + workslug;
  };
  return (
    <div className="works">
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>
        Découvrez pas à pas comment nous avons été présent pour lancer vos
        marques préférées.
      </p>

      <Router>
        <nav className="d-flex">
          {projects.map((casestudy) => (
            <div className="text-primary">
              <Link to={finalURL(casestudy.slug)} className="nav-link me-2">
                {casestudy.name}
              </Link>
            </div>
          ))}
        </nav>
        <Switch>
          <Route path="/works/:projectSlug">
            <Project />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Works;
