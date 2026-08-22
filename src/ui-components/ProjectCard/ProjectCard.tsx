import './ProjectCard.scss';
import TextButton from '../TextButton/TextButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Project } from '../../shared/Projects.ts';
import { useState } from 'react';

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
  const [expanded, setExpanded] = useState(false);

  // Descriptions range from two lines to four paragraphs. Clamping the
  // long ones keeps every card the same visual weight in the grid.
  const isLong = description.length > 260;

  return (
    <article className='project-card'>
      <div className='project-card-media'>
        <img src={image} alt={`Vista previa del proyecto ${name}`} loading='lazy' />
      </div>

      <div className='project-card-body'>
        <div className='project-card-heading'>
          <span className='project-card-year'>{year}</span>
          <h3 className='project-card-title'>{name}</h3>
        </div>

        <p
          className={`project-card-description ${
            isLong && !expanded ? 'is-clamped' : ''
          }`}
        >
          {description}
        </p>

        {isLong && (
          <button
            type='button'
            className='project-card-toggle'
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Leer menos' : 'Leer más'}
          </button>
        )}

        <dl className='project-card-meta'>
          <div className='project-card-meta-row'>
            <dt>Rol</dt>
            <dd>{role}</dd>
          </div>
          <div className='project-card-meta-row'>
            <dt>Tecnologías</dt>
            <dd>{technologies}</dd>
          </div>
        </dl>

        <div className='project-card-actions'>
          <TextButton
            icon={<ArrowOutwardIcon />}
            href={demo}
            text='DEMO ONLINE'
            name={demo ? '' : 'Este proyecto no tiene demo pública'}
          />
          <TextButton
            icon={<GitHubIcon />}
            href={repository}
            text='REPOSITORIO'
            name={repository ? '' : 'Este proyecto es de código cerrado'}
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
