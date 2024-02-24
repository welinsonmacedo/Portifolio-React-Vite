
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Estilizando o quadro de habilidades
const SkillBoardContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 

`;

const Skills = styled.div`
margin-top: 3rem;
width: 100%;
`

const SkillItem = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  margin: 20px;
`;

const SkillName = styled.h3`
  font-size: 16px;
  margin: 0;
`;

const SkillLevel = styled.span`
  font-size: 14px;
  color: #666;
`;
const Title = styled.h2`
text-align: center;
color: #666;
`
// Componente SkillBoard
const SkillBoard = () => {
  const skills = [
    { name: 'HTML', level: 'Avançado' },
    { name: 'CSS', level: 'Avançado'},
    { name: 'JavaScript', level: 'Avançado' },
    { name: 'TypeScript', level: 'Intermediário' },
    { name: 'Node js', level: 'Intermediário' },
    { name: 'ReactJS', level: 'Avançado' },
    { name: 'React Native', level: 'Intermediário' },
    { name: 'Next js', level: 'Intermediário' },
    { name: 'Angular', level: 'Iniciante' },
    { name: 'Kotlin', level: 'Iniciante' },
    { name: 'FireBase', level: 'Intermediário' },
    { name: 'GitHub', level: 'Intermediário' },
    { name: 'Figma', level: 'Intermediário' },
  
 
  
  

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
