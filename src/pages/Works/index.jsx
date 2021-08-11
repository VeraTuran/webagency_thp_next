import { Link } from "react-router-dom";
import casestudy from "./casestudy/index";

const Works = () => {
  return (
    <div className="works">
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>
        Découvrez pas à pas comment nous avons été présent pour lancer vos
        marques préférées.
      </p>
      <div>
        {casestudy.map((case) => {
          return(
            <Link key={case.slug}>
            </Link>
          )
        }}
      </div>
    </div>
  );
};

export default Works;
