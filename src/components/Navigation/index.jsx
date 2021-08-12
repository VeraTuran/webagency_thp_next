import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">Websitic</div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page">
                  <Link to="/">Home</Link>
                </div>
              </li>

              <li className="nav-item">
                <div className="nav-link">
                  <Link to="/about">About</Link>
                </div>
              </li>

              <li className="nav-item">
                <div className="nav-link">
                  <Link to="/works">Works</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
