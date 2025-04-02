import './ExperienceComponent.scss';
import ExperienceCard from '../../ui-components/ExperienceCard/ExperienceCard';
import { Experience, experience } from '../../shared/Experience';

const ExperienceComponent = () => {
  return (
    <div className='experience-container'>
      <div className='experience-text-container'>
        <div className='experience-title'>Experiencia laboral</div>
        <p className='experience-text'>
          Un resumen de mi experiencia laboral, destacando los roles que he
          ocupado y las habilidades que he desarrollado a lo largo de mi
          carrera.
        </p>
      </div>
      <div className='experience-cards-container'>
        {experience.map((experience: Experience) => (
          <ExperienceCard
            name={experience.name}
            linkedIn={experience.linkedIn}
            page={experience.page}
            image={experience.image}
            timeInit={experience.timeInit}
            timeEnd={experience.timeEnd}
            role={experience.role}
            technologies={experience.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceComponent;
