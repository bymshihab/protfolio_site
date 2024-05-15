import { useEffect, useState } from "react";
import Project from "../Project/Project";

const Projects = () => {
  const [project, setProject] = useState({});

  const projectData = async () => {
    const data = await fetch("/public/ProjectData.json");
    const json = await data.json();
    console.log(json, "all data");
    setProject(json);
  };

  useEffect(() => {
    projectData();
  }, []);

  return (
    <div>
      {project.projects?.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
