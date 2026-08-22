import './ExperienceCard.scss';
import TextButton from '../TextButton/TextButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import { Experience } from '../../shared/Experience';

const ExperienceCard = ({
  name,
  linkedIn,
  page,
  image,
  timeInit,
  timeEnd,
  role,
  technologies,
}: Experience) => {
  const isCurrent = timeEnd === null;

  return (
    <article className='experience-card'>
      <div className='experience-card-logo'>
        <img src={image} alt={`Logo de ${name}`} loading='lazy' />
      </div>

      <div className='experience-card-body'>
        <div className='experience-card-heading'>
          <h3 className='experience-card-title'>{name}</h3>
          {isCurrent && (
            <span className='experience-card-badge'>
              <span className='experience-card-badge-dot' />
              Actual
            </span>
          )}
        </div>

        <p className='experience-card-role'>{role}</p>

        <p className='experience-card-period'>
          {timeInit} — {timeEnd ?? 'Actualidad'}
        </p>

        <ul className='experience-card-tech'>
          {technologies.split(',').map((tech: string) => (
            <li key={tech.trim()}>{tech.trim()}</li>
          ))}
        </ul>

        <div className='experience-card-actions'>
          <TextButton
            icon={<LanguageIcon />}
            href={page}
            text='SITIO WEB'
            name=''
          />
          <TextButton
            icon={<LinkedInIcon />}
            href={linkedIn}
            text='LINKEDIN'
            name=''
          />
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
