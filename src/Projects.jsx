import "./Projects.css";
import Project from "./Project.jsx";
import projects_data from "./projectsData.json";
function Projects() {
  return (
    <section className="projects">
      {projects_data.map((project) => (
        <Project project_data={project} />
      ))}
    </section>
  );
}

export default Projects;
