import PropTypes from 'prop-types';
import styled from 'styled-components';

// Estilos para o componente de projeto
const ProjectContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ccc;
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
`;

const ProjectLink = styled.a`
  display: block;
  font-size: 14px;
  color: #ffffff;
  margin-top: 10px;
  background-color: #047521;
  border-radius: 5px;
  padding: 5px;
  &:hover {
    background-color: #6eda8e;
    color:black;
    }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.1); 
   
  }
`;
const Skills = styled.h4`
color: #ffffff;
background-color: gray;
margin-top: 10px;
padding: 5px;
border-radius: 5px;

`

// Componente Project
const Project = ({ title, description, link, code, imageSrc,skillsText }) => {
  return (
    <ProjectContainer>
      {imageSrc && <ProjectImage src={imageSrc} alt={title} />}
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
        Link para o projeto: 
       
      </ProjectLink>
      <ProjectLink href={code} target="_blank" rel="noopener noreferrer">
        Link para o GitHub
      </ProjectLink>
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
  imageSrc: PropTypes.string ,
  skillsText:PropTypes.string
};

export default Project;
