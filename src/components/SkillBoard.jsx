import PropTypes from 'prop-types';
import styled from 'styled-components';

// Estilizando o quadro de habilidades
const SkillBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 20px;
  padding: 20px;
`;

const Skills = styled.div`
  margin-top: 3rem;
  width: 100%;
`;

const SkillItem = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const SkillName = styled.h3`
  font-size: 18px;
  color: #2c3e50;
  margin: 0;
`;

const SkillLevel = styled.span`
  font-size: 14px;
  color: #555;
`;

const Title = styled.h2`
  text-align: center;
  color: #2c3e50;
`;

// Componente SkillBoard
const SkillBoard = () => {
  const skills = [
    { name: 'HTML', level: 'Avançado' },
    { name: 'CSS', level: 'Avançado'},
    { name: 'JavaScript', level: 'Avançado' },
    { name: 'TypeScript', level: 'Intermediário' },
    { name: 'Node.js', level: 'Intermediário' },
    { name: 'ReactJS', level: 'Avançado' },
    { name: 'React Native', level: 'Intermediário' },
    { name: 'Next.js', level: 'Intermediário' },
    { name: 'Angular', level: 'Iniciante' },
    { name: 'Kotlin', level: 'Iniciante' },
    { name: 'Firebase', level: 'Intermediário' },
    { name: 'GitHub', level: 'Intermediário' },
    { name: 'Git', level: 'Intermediário' },
    { name: 'Figma', level: 'Intermediário' },
    { name: 'Scrum', level: 'Intermediário' },
  ];

  return (
    <Skills>
      <Title>Skills</Title>
      <SkillBoardContainer>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillName>{skill.name}</SkillName>
            <SkillLevel>{skill.level}</SkillLevel>
          </SkillItem>
        ))}
      </SkillBoardContainer>
    </Skills>
  );
};

SkillBoard.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillBoard;
