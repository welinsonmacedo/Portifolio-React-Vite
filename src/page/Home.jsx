import styled from 'styled-components';
import SkillBoard from '../components/SkillBoard';
import ContainerHome from '../components/ContainerHome';
import ContainerProjects from '../components/ContainerProjects';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  overflow-y: auto; 

  /* Adiciona overflow-y auto para permitir rolagem vertical quando necessário */
`;

const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(#ffffff, transparent 50%), 
              radial-gradient(#000000, transparent 50%),
              radial-gradient(#ff0000, transparent 50%);
  background-size: 7px 7px;
  z-index: -1;
  animation: animateBackground 50s linear infinite;

  @keyframes animateBackground {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 2rem; /* Adicionei o padding novamente para manter o conteúdo afastado das bordas */
`;

const Home = () => {
  return (
    <Container>
      <AnimatedBackground />
      <ContentContainer>
        <ContainerHome />
        <SkillBoard />
        <ContainerProjects />
      </ContentContainer>
    </Container>
  );
};

export default Home;
