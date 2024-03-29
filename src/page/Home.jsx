import styled from 'styled-components';
import Project from '../components/Project';
import ProfileImgComponent from '../components/ProfileImgComponent';
import SocialLinks from '../components/SocialLinks';
import SkillBoard from '../components/SkillBoard';
import Infographic from '../components/InfographicContainer'
import Button from '../components/Button'
const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  gap:20px;
`;



const Title = styled.h1`
  color: #2c465e;
`;

const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const Home = () => {
  const projects = [
    {
      title: 'React-Native-Financial-Control',
      description:
        'This is a multiplatform web android app: Financial control app Technologies: ReactNative | Expo | Firebase User Teste : test@gmail.com Senha:179300',
      link: 'https://wmcontrolefinanceiro1-0.netlify.app/',
      code: 'https://github.com/welinsonmacedo/React-Native-Financial-Control.git',
      imageSrc: 'REACT NATIVE CONTROLE FINANCEIRO.png',
      skillsText:'React Native | Expo | Firebase'
    },
    {
      title: 'Rocketseat-Challenge-Discover-2024',
      description:
        'This Project was developed at Rocketseat-Challenge-Discover-2024',
      link: 'https://welinsonlinks.netlify.app/',
      code: 'https://github.com/welinsonmacedo/Rocketseat-Challenge-Discover-2024.git',
      imageSrc: 'Rocketseat-Challenge-Discover-2024.png',
      skillsText:'Html | Css | Java Script'
    },
    {
      title: 'Angular-course-store',
      description:
        'This Project Was Developed to train new Angualar skills',
      link: 'https://magenta-sprite-0d694d.netlify.app/',
      code: 'https://github.com/welinsonmacedo/-Angular-course-store.git',
      imageSrc: 'Angular Store.png',
      skillsText:'Angular'
    },
  

  ];

  return (
    <ContainerHome>
      <Title>Welinson</Title>
      <ProfileImgComponent src='https://media.licdn.com/dms/image/D4D35AQGUHK4CX9jlvw/profile-framedphoto-shrink_200_200/0/1706706370051?e=1708866000&v=beta&t=TAc8mASi-K8Ca8w_wznnn532MWDS0ReIQHh1K8rSuTo' />
      <SocialLinks />
      <Infographic
        age='25 anos'
        studyTime="4 anos"
        experience="Desenvolvedor Free-lancer "
        aboutMe="Desenvolvedor Fullstack apaixonado por criar inovações digitais e resolver problemas complexos. Sempre buscando aprender e evoluir."
      />
      <Title>Desenvolvedor FullStack</Title>
      <SkillBoard />
      <h2>Meus Projetos</h2>
      <ContainerProjects>

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
        <Button link='https://github.com/welinsonmacedo'> Ver Todos Projetos </Button>
      </ContainerProjects>
    </ContainerHome>
  );
};

export default Home;
