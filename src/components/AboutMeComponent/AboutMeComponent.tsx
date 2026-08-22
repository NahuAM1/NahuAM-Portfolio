import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
import './AboutMeComponent.scss';

const AboutMeComponent = () => {
  return (
    <section className='aboutMeComponent-container' id='sobre-mi' data-reveal>
      <div className='aboutMeComponent-aside'>
        <p className='section-eyebrow'>Perfil</p>
        <h2 className='section-title'>Acerca De Mí</h2>
      </div>

      <div className='aboutMeComponent-resume'>
        <p className='aboutMeComponent-resume-title'>
          Dejame contarte un poco más de mí:
        </p>
        <p className='aboutMeComponent-resume-text'>
          Soy Ingeniero en Sistemas de Información, egresado de la Universidad
          Tecnológica Nacional. Mi trabajo no se agota en escribir código: además
          de desarrollar aplicaciones completas, automatizo procesos y optimizo
          sistemas para que las organizaciones ganen tiempo y reduzcan errores.
        </p>
        <p className='aboutMeComponent-resume-text'>
          En lo técnico, cubro el ciclo completo: frontend con React, Vue y
          Next.js, backend escalable con NestJS, Java y Spring Boot, y despliegue
          de soluciones nativas de la nube sobre AWS y Docker. Trabajo con APIs
          REST, bases de datos SQL y NoSQL, arquitectura de microservicios y
          metodologías ágiles.
        </p>
        <p className='aboutMeComponent-resume-text'>
          Tengo experiencia en el desarrollo de sistemas distribuidos, en la
          integración de capacidades de IA y modelos de lenguaje (LLMs) para
          automatizar tareas que antes eran manuales, y en el diseño de software
          mantenible siguiendo los principios de la arquitectura limpia.
        </p>
        <p className='aboutMeComponent-resume-text'>
          Actualmente estoy ampliando mis conocimientos en Spring WebFlux,
          programación reactiva, Kubernetes, Kafka y arquitecturas basadas en
          eventos. Mi objetivo es contribuir de manera significativa al campo de
          la ingeniería de sistemas, aplicando mis habilidades técnicas y mi
          capacidad para adaptarme a entornos dinámicos.
        </p>

        <Link to={'/about'} className='aboutMeComponent-link'>
          Más acerca de mí
          <ArrowOutwardIcon />
        </Link>
      </div>
    </section>
  );
};

export default AboutMeComponent;
