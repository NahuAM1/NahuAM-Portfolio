import ProjectCard from "../../ui-components/ProjectCard/ProjectCard";
import "./Proyects.scss";
import { projects, Project } from "../../shared/Projects.ts";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-text-container">
        <div className="projects-title">Projectos Destacados</div>
        <p className="projects-text">
          Estos son algunos de los projectos seleccionados que muestran mi
          compromiso y gusto por el desarrollo de software.
        </p>
      </div>
      <div className="projects-cards-container">
        {projects.map((project: Project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            image={project.image}
            year={project.year}
            role={project.role}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
