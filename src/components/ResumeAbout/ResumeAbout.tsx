import './ResumeAbout.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '../../ui-components/IconButton/IconButton.tsx';
import ButtonTemplate from '../../ui-components/ButtonTemplate/ButtonTemplate.tsx';
import CV from '../../shared/media/Curriculum Vitae - Manero Nahuel.pdf';
const ResumeAbout = () => {
  return (
    <div className='resumeAbout-container'>
      <div className='resumeAbout-title'>Acerca De Mi</div>
      <div className='resumeAbout-resume'>
        <p className='resumeAbout-resume-title'>
          Dejame contarte un poco mas de mi:
        </p>
        <p className='resumeAbout-resume-text'>
          Soy una persona apasionada por el deporte, disfruto ver series y jugar
          a videojuegos. Amo pasar tiempo al aire libre, practicando pádel y
          artes marciales. Viajar es una de mis grandes pasiones, y mi lugar
          favorito en el mungo es la Patagonia Argentina.
          <br />
          Me encantan los animales, la tecnología y siempre estoy al tanto de
          las últimas innovaciones.
          <br />
          Valoro mucho pasar tiempo con mis amigos y mi familia, ya que esos
          momentos compartidos son muy importantes para mí.
          <br />
          Profesionalmente, mi propósito es convertirme en un Ingeniero en
          Sistemas de Información respetado y confiable, reconocido por mi
          profesionalismo y habilidades técnicas. Aspiro a alcanzar la libertad
          financiera, permitiéndome vivir cómodamente y sin preocupaciones
          económicas, y utilizar mis conocimientos para resolver problemas
          complejos y promover la innovación tecnológica de manera ética y
          responsable.
        </p>
        <div className='resumeAbout-buttons'>
          <a
            href={CV}
            download='Curriculum Vitae - Manero Nahuel.pdf'
            className='a'
          >
            <ButtonTemplate name='Descarga mi CV' />
          </a>
          <IconButton
            icon={<LinkedInIcon />}
            href={'https://www.linkedin.com/in/nahuelmanero/'}
            name={''}
          />
          <IconButton
            icon={<GitHubIcon />}
            href={'https://github.com/NahuAM1'}
            name={''}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeAbout;
