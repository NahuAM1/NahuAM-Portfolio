import ProjectCard from '../../ui-components/ProjectCard/ProjectCard';
import './Proyects.scss';
import { projects, Project } from '../../shared/Projects.ts';

const Projects = () => {
  return (
    <section className='projects-container' id='proyectos' data-reveal>
      <header className='section-header'>
        <p className='section-eyebrow'>Portfolio</p>
        <h2 className='section-title'>Proyectos Destacados</h2>
        <p className='section-lead'>
          Estos son algunos de los proyectos seleccionados que muestran mi
          compromiso y gusto por el desarrollo de software.
        </p>
      </header>

      <div className='projects-cards-container'>
        {projects.map((project: Project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
