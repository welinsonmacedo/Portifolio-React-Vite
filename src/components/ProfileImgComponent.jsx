
import styled from 'styled-components';
import PropTypes from 'prop-types'; 



const ProfileImage = styled.img`
  width: 150px; 
  height: 150px;
  border-radius: 50%; 
  border: 2px solid #000000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;

const ProfileImgComponent = ({ src, alt }) => {
    return <ProfileImage src={src} alt={alt} />;
  };
 
  ProfileImgComponent.propTypes = {
    src: PropTypes.string.isRequired, 
    alt: PropTypes.string.isRequired, 
  };
  
  export default ProfileImgComponent
