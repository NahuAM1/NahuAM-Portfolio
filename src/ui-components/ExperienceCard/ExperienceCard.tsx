import './ExperienceCard.scss';
import TextButton from '../TextButton/TextButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

interface ExperienceCardProps {
  name: string;
  linkedIn: string;
  page: string;
  image: string;
  timeInit: string;
  timeEnd: string | null;
  role: string;
  technologies: string;
}

const ExperienceCard = ({
  name,
  linkedIn,
  page,
  image,
  timeInit,
  timeEnd,
  role,
  technologies,
}: ExperienceCardProps) => {
  return (
    <div className='experience-card-container'>
      <div className='experience-card-image-container'>
        <img src={image} alt='' className='experience-card-image' />
      </div>
      <div className='experience-card-resume'>
        <p className='experience-card-title'>{name}</p>
        <div className='experience-card-info-container'>
          <div className='experience-card-info-row'>
            <p className='experience-card-info'>INFORMACIÓN DEL PUESTO</p>
          </div>
          <div className='experience-card-info-row'>
            <p className='experience-card-year'>Periodo</p>
            <p className='experience-card-year-info'>
              {timeInit} - {timeEnd ?? 'Actualidad'}
            </p>
          </div>
          <div className='experience-card-info-row'>
            <p className='experience-card-rol'>Rol en la organizacion</p>
            <p className='experience-card-rol-info'>{role}</p>
          </div>
          <div className='experience-card-info-row'>
            <p className='experience-card-tech'>Tecnologias usadas</p>
            <p className='experience-card-tech-info'>{technologies}</p>
          </div>
        </div>
        <div className='experience-card-buttons'>
          <TextButton
            icon={<LanguageIcon />}
            href={page}
            text='PAGINA DE LA ORGANIZACION'
            name=''
          />
          <TextButton
            icon={<LinkedInIcon />}
            href={linkedIn}
            text='LINKEDIN DE LA ORGANIZACION'
            name=''
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
