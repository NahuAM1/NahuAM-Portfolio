import "./Skills.scss";
import { skills, Skill } from "../../shared/Skills.ts";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-title">Habilidades</div>
      <div className="skills-resume">
        <p className="skills-resume-text">
          Me considero una persona dedicada a la formación continua, siempre
          buscando oportunidades para ampliar mis habilidades y conocimientos en
          el ámbito tecnológico. <br />
          Tengo conocimientos y formación en lenguajes de desarrollo web y en
          metodologías ágiles.
        </p>
        <div className="skills-cards-container">
          {skills.map((skill: Skill) => (
            <div className="skill-card">
              <p className="skill-card-name">{skill.name}</p>
              <img src={skill.img} alt="" className="skill-card-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
