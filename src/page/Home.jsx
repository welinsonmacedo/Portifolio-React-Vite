import styled from 'styled-components';
import Project from '../components/Project';
import ProfileImgComponent from '../components/ProfileImgComponent';
import SocialLinks from '../components/SocialLinks';
import SkillBoard from '../components/SkillBoard';
import Infographic from '../components/InfographicContainer'
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
      imageSrc: 'https://private-user-images.githubusercontent.com/98168234/303947870-faa39ee7-524e-421b-a083-ec0ee67aac88.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDgyNjM1OTQsIm5iZiI6MTcwODI2MzI5NCwicGF0aCI6Ii85ODE2ODIzNC8zMDM5NDc4NzAtZmFhMzllZTctNTI0ZS00MjFiLWEwODMtZWMwZWU2N2FhYzg4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjE4VDEzMzQ1NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRjNzhiZDQ1YjFiMDE0NTBmM2M1MjdhOGEzOTZhNDQ0ZjBhYzE2ODhjYTU4Y2Q2ZGQwZjQ3MzlmMzlhN2YzNTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.qMWk42HJmo9RHq1AIJefThRsWHN-3Hz6vKsGjTNIemU'
    }


  ];

  return (
    <ContainerHome>
      <Title>Welinson</Title>
      <ProfileImgComponent src='https://media.licdn.com/dms/image/D4D35AQGUHK4CX9jlvw/profile-framedphoto-shrink_200_200/0/1706706370051?e=1708866000&v=beta&t=TAc8mASi-K8Ca8w_wznnn532MWDS0ReIQHh1K8rSuTo' />
      <SocialLinks />
      <Infographic
        age={25}
        studyTime="5 anos"
        experience="4 anos como desenvolvedor fullstack"
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
          />
        ))}
      </ContainerProjects>
    </ContainerHome>
  );
};

export default Home;
