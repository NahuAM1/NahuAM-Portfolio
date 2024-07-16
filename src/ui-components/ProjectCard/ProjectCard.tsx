import './ProjectCard.scss';
import TextButton from '../TextButton/TextButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Project } from '../../shared/Projects.ts';

const ProjectCard = ({
  name,
  description,
  image,
  year,
  role,
  technologies,
  demo,
  repository,
}: Project) => {
  return (
    <div className='project-card-container'>
      <div className='project-card-image-container'>
        <img src={image} alt='' className='project-card-image' />
      </div>
      <div className='project-card-resume'>
        <p className='project-card-title'>{name}</p>
        <p className='project-card-text'>{description}</p>
        <div className='project-card-info-container'>
          <div className='project-card-info-row'>
            <p className='project-card-info'>INFORMACIÓN DEL PROYECTO</p>
          </div>
          <div className='project-card-info-row'>
            <p className='project-card-year'>Año</p>
            <p className='project-card-year-info'>{year}</p>
          </div>
          <div className='project-card-info-row'>
            <p className='project-card-rol'>Rol en el proyecto</p>
            <p className='project-card-rol-info'>{role}</p>
          </div>
          <div className='project-card-info-row'>
            <p className='project-card-tech'>Tecnologias</p>
            <p className='project-card-tech-info'>{technologies}</p>
          </div>
        </div>
        <div className='project-card-buttons'>
          <TextButton
            icon={<ArrowOutwardIcon />}
            href={demo}
            text='DEMO ONLINE'
            name=''
          />
          <TextButton
            icon={<GitHubIcon />}
            href={repository}
            text='REPOSITORIO DE GITHUB'
            name=''
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
