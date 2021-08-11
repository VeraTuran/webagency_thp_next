import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import projects from "./casestudy/index";

const Project = () => {
  const { projectSlug } = useParams();
  const [currentProject, setCurrentProject] = useState(undefined)

  useEffect(() => {
    const foundProject = projects.find((project) => project.slug === projectSlug);
    setCurrentBook(foundProject);
  }, [projectSlug])

const Works = () => {
    <div className="works">
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>
        Découvrez pas à pas comment nous avons été présent pour lancer vos
        marques préférées.
      </p>
      <div>
        {projects.map((project) => {
          return(
            <Link key={project.slug}to={`/works/${project.slug}-casestudy`}>{project.description}
            </Link>
          )})};
      </div>
    </div>
}};

export default Works;