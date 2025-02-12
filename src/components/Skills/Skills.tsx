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
  const handleopen = (skill: Skill) => {
    setSkill(skill);
    setOpen(true);
  };
  return (
    <div className='skills-container'>
      <div className='skills-title'>Habilidades</div>
      <div className='skills-resume'>
        <p className='skills-resume-text'>
          Me considero una persona dedicada a la formación continua, siempre
          buscando oportunidades para ampliar mis habilidades y conocimientos en
          el ámbito tecnológico. <br />
          Tengo conocimientos y formación en lenguajes de desarrollo web y en
          metodologías ágiles.
        </p>
        <div className='skills-cards-container'>
          {skills.map((skill: Skill) => (
            <div className='skill-card' onClick={() => handleopen(skill)}>
              <p className='skill-card-name'>{skill.name}</p>
              <img src={skill.img} alt='' className='skill-card-img' />
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <div className='skill-modal-container' onClick={handleClose}>
          <div className='skill-modal'>
            <div className='skill-modal-data'>
              <img src={selectedSkill?.img} alt='' className='skill-card-img' />
              <p className='skill-card-name'>{selectedSkill?.name}</p>
            </div>
            <p className='skill-modal-description'>
              {selectedSkill?.description}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Skills;
