import './Skills.scss';
import { skills, Skill } from '../../shared/Skills.ts';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const Skills = () => {
  const [open, setOpen] = useState(false);
  const [selectedSkill, setSkill] = useState<Skill | null>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (skill: Skill) => {
    setSkill(skill);
    setOpen(true);
  };

  return (
    <section className='skills-container' data-reveal>
      <div className='skills-aside'>
        <p className='section-eyebrow'>Stack</p>
        <h2 className='section-title'>Habilidades</h2>
      </div>

      <div className='skills-resume'>
        <p className='skills-resume-text'>
          Me considero una persona dedicada a la formación continua, siempre
          buscando oportunidades para ampliar mis habilidades y conocimientos en
          el ámbito tecnológico. Tengo conocimientos y formación en lenguajes de
          desarrollo web y en metodologías ágiles.
        </p>

        <ul className='skills-cards-container'>
          {skills.map((skill: Skill) => (
            <li key={skill.name}>
              {/* A real button, not a clickable div: this opens a dialog,
                  so it has to be reachable and activatable by keyboard. */}
              <button
                type='button'
                className='skill-card'
                onClick={() => handleOpen(skill)}
              >
                {/* Logos are hotlinked from a third-party CDN. If one stops
                    resolving, hide the broken-image glyph rather than
                    letting it sit in the chip. */}
                <img
                  src={skill.img}
                  alt=''
                  loading='lazy'
                  onError={(e) => {
                    e.currentTarget.classList.add('is-broken');
                  }}
                />
                <span className='skill-card-name'>{skill.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='skill-modal-title'
        aria-describedby='skill-modal-description'
      >
        <div className='skill-modal-container' onClick={handleClose}>
          {/* Stops a click inside the panel from closing the dialog. */}
          <div className='skill-modal' onClick={(e) => e.stopPropagation()}>
            <div className='skill-modal-data'>
              <img src={selectedSkill?.img} alt='' />
              <p className='skill-modal-title' id='skill-modal-title'>
                {selectedSkill?.name}
              </p>
            </div>
            <p className='skill-modal-description' id='skill-modal-description'>
              {selectedSkill?.description}
            </p>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Skills;
