import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import projects from "data/index";

const Project = () => {
  const { projectSlug } = useParams();
  const [currentProject, setCurrentProject] = useState(undefined)

  useEffect(() => {
    const foundProject = projects.find((project) => project.slug === projectSlug);
    setCurrentProject(foundProject);
  }, [projectSlug])

  return (
    <div className='casestudy'>
      <h3>{currentProject && currentProject.title}</h3>
      <p>{currentProject && currentProject.description}</p>
    </div>
  );
};

export default Project;