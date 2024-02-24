
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Estilos para o componente infográfico
const InfographicContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const InfographicTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const InfographicItem = styled.div`
  margin-bottom: 10px;
`;

const InfographicLabel = styled.span`
  font-weight: bold;
`;

// Componente Infographic
const Infographic = ({ age, studyTime, experience, aboutMe }) => {
  return (
    <InfographicContainer>
      <InfographicTitle>Informações</InfographicTitle>
      <InfographicItem>
        <InfographicLabel>Idade:</InfographicLabel> {age}
      </InfographicItem>
      <InfographicItem>
        <InfographicLabel>Tempo de Estudo:</InfographicLabel> {studyTime}
      </InfographicItem>
      <InfographicItem>
        <InfographicLabel>Experiência:</InfographicLabel> {experience}
      </InfographicItem>
      <InfographicItem>
        <InfographicLabel>Sobre Mim:</InfographicLabel> {aboutMe}
      </InfographicItem>
    </InfographicContainer>
  );
};

// Propriedades esperadas para o componente Infographic
Infographic.propTypes = {
  age: PropTypes.string.isRequired,
  studyTime: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  aboutMe: PropTypes.string.isRequired,
};

export default Infographic;
