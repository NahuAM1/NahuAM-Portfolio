import ProjectCard from "../../ui-components/ProjectCard/ProjectCard";
import "./Proyects.scss";

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
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
