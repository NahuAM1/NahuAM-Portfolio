import './EducationComponent.scss';
import { Education, education } from '../../shared/Education';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const EducationComponent = () => {
  return (
    <section className='education-container' id='formacion' data-reveal>
      <header className='section-header'>
        <p className='section-eyebrow'>Formación</p>
        <h2 className='section-title'>Aprendizaje continuo</h2>
        <p className='section-lead'>
          Mi formación académica y las instancias en las que sigo actualizándome,
          sobre todo en inteligencia artificial aplicada a la automatización de
          procesos.
        </p>
      </header>

      <ol className='education-list'>
        {education.map((item: Education) => (
          <li key={item.title} className='education-item'>
            <span className='education-icon' aria-hidden='true'>
              {item.kind === 'certificacion' ? (
                <WorkspacePremiumIcon />
              ) : (
                <SchoolIcon />
              )}
            </span>

            <div className='education-body'>
              <div className='education-heading'>
                <h3 className='education-title'>{item.title}</h3>
                <span className='education-period'>{item.period}</span>
              </div>
              <p className='education-institution'>{item.institution}</p>
              <p className='education-detail'>{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default EducationComponent;
