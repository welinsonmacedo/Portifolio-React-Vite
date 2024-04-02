import PropTypes from 'prop-types';
import styled from 'styled-components';

// Estilos para o componente de projeto
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  min-height: 590px;
  margin-top: 5rem;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  color: #2c3e50;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #4a5568;
  min-height: 110px;
  max-height: 110px;
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  min-height: 100px;
  max-height: 100px;
 
`;

const ProjectLink = styled.a`
  display: block;

  font-size: 14px;
  color: #ffffff;
  background-color: #3182ce;
  border-radius: 5px;
  padding: 10px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #63b3ed;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Skills = styled.h4`
  font-size: 14px;
  color: #473333;
  background-color: #ebe6e634;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border-bottom: solid gray 3px;
`;

// Componente Project
const Project = ({ title, description, link, code, imageSrc, skillsText }) => {
  return (
    <ProjectContainer>
      {imageSrc && <ProjectImage src={imageSrc} alt={title} />}
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLinks>
        <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
          Link para o projeto
        </ProjectLink>
        <ProjectLink href={code} target="_blank" rel="noopener noreferrer">
          Link para o GitHub
        </ProjectLink>
      </ProjectLinks>
      <Skills>{skillsText}</Skills>
    </ProjectContainer>
  );
};

// Propriedades esperadas para o componente Project
Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  skillsText: PropTypes.string.isRequired,
};

export default Project;
