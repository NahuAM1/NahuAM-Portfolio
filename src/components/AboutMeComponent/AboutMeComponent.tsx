import TextButton from '../../ui-components/TextButton/TextButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
import './AboutMeComponent.scss';

const AboutMeComponent = () => {
  return (
    <div className='aboutMeComponent-container'>
      <div className='aboutMeComponent-title'>Acerca De Mi</div>
      <div className='aboutMeComponent-resume'>
        <p className='aboutMeComponent-resume-title'>
          Dejame contarte un poco mas de mi:
        </p>
        <p className='aboutMeComponent-resume-text'>
          Soy Ingeniero en Sistemas de Información.
          <br></br>Mi principal enfoque es lograr un constante crecimiento,
          tanto a nivel personal como profesional. Me considero una persona
          dedicada a la formación continua, siempre buscando oportunidades para
          ampliar mis habilidades y conocimientos en el ámbito tecnológico.
          <br></br>Tengo conocimientos y formación en lenguajes de desarrollo
          web y en metodologías ágiles. Poseo experiencia y formación sólida en
          diversos lenguajes de desarrollo web, así como en la aplicación de
          metodologías ágiles. <br></br>Mi objetivo es contribuir de manera
          significativa al campo de la ingeniería de sistemas, aplicando mis
          habilidades técnicas y mi capacidad para adaptarme a entornos
          dinámicos. Estoy comprometido con mi desarrollo profesional y estoy
          abierto a desafíos que me permitan seguir aprendiendo y evolucionando
          en esta disciplina.
        </p>

        <Link to={'/about'}>
          <TextButton
            text='Mas Acerca De Mi'
            icon={<ArrowOutwardIcon />}
            href={'/about'}
            name=''
          />
        </Link>
      </div>
    </div>
  );
};

export default AboutMeComponent;
