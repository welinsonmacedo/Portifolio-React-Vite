import styled from 'styled-components';
import Project from '../components/Project';
import Button from '../components/Button';

const ContainerDivision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ProjectsHeading = styled.h3`
  font-size: 1.5rem;
  color: #2c465e;
  margin-top: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
`;

const ContainerProjects = () => {
  const projects = [
    {
      title: 'Financial-Control',
      description:
        'This is a multiplatform web android app: Financial control app Technologies: ReactNative | Expo | Firebase User Teste : test@gmail.com Senha:179300',
      link: 'https://wmcontrolefinanceiro1-0.netlify.app/',
      code: 'https://github.com/welinsonmacedo/React-Native-Financial-Control.git',
      imageSrc: 'REACT NATIVE CONTROLE FINANCEIRO.png',
      skillsText: 'React Native | Expo | Firebase',
    },
    {
      title: 'Receiptproject',
      description:
        'project developing a web application that generates receipts for a client who works with transport and travel',
      link: 'https://receiptproject.vercel.app/',
      code: 'https://github.com/welinsonmacedo/receiptproject.git',
      imageSrc: 'receipts.png',
      skillsText: 'React  |  Firebase',
    },
    {
      title: 'Angular-course-store',
      description: 'This Project Was Developed to train new Angualar skills',
      link: 'https://magenta-sprite-0d694d.netlify.app/',
      code: 'https://github.com/welinsonmacedo/-Angular-course-store.git',
      imageSrc: 'Angular Store.png',
      skillsText: 'Angular',
    },
  ];

  return (
    <ContainerDivision>
      <ProjectsHeading>Meus Projetos</ProjectsHeading>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            code={project.code}
            imageSrc={project.imageSrc}
            skillsText={project.skillsText}
          />
        ))}
      </ProjectsGrid>
      <StyledButton link='https://github.com/welinsonmacedo'>Ver Todos Projetos</StyledButton>
    </ContainerDivision>
  );
};

export default ContainerProjects;
