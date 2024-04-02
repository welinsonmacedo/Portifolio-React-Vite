import styled from "styled-components";
import ProfileImgComponent from '../components//ProfileImgComponent';
import SocialLinks from '../components/SocialLinks';
import DownloadCVButton from '../components/DownloadCVButton';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 80vh;
`;
const ContainerDivision = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
  color: #2c465e;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ContainerHome = () =>{

    return(
<>
<Container>
        <ContainerDivision>
          <ProfileImgComponent src='perfil.jpeg' />
        </ContainerDivision>
        <ContainerDivision>

          <Title as='h2' size='lg' mt='2rem'>
            Desenvolvedor FullStack
         
          </Title>
          <SocialLinks />
          <DownloadCVButton fileName="Cv-Welinson.pdf" filePath="Cv.pdf" />

        </ContainerDivision>

      </Container>
</>
    )
}

export default ContainerHome;