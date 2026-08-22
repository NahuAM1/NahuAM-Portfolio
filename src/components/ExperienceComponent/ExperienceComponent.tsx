import './ExperienceComponent.scss';
import ExperienceCard from '../../ui-components/ExperienceCard/ExperienceCard';
import { Experience, experience } from '../../shared/Experience';

const ExperienceComponent = () => {
  return (
    <section className='experience-container' id='experiencia' data-reveal>
      <header className='section-header'>
        <p className='section-eyebrow'>Trayectoria</p>
        <h2 className='section-title'>Experiencia laboral</h2>
        <p className='section-lead'>
          Un resumen de mi experiencia laboral, destacando los roles que he
          ocupado y las habilidades que he desarrollado a lo largo de mi
          carrera.
        </p>
      </header>

      <div className='experience-cards-container'>
        {experience.map((item: Experience) => (
          <ExperienceCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceComponent;
