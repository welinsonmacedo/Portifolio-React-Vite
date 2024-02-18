
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ContainerLnks=styled.div`
display: flex;
flex-direction: row;
gap: 4rem;
`

const SocialLinks = () => {

    return (
        <ContainerLnks>

            <a href='https://api.whatsapp.com/send?phone=5534991448794' target="_blank" >
                <img  width="50" height="50" src='https://img.icons8.com/color/48/whatsapp--v1.png' alt='whatsapp'/>
            </a>
            <a href='https://www.linkedin.com/in/welinson-marlon/' target="_blank" >
                <img  width="50" height="50" src='https://img.icons8.com/fluency/48/linkedin.png' alt='linkedin' />
            </a>
            <a href='https://github.com/welinsonmacedo' target="_blank" >
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github" />
            </a>

        </ContainerLnks>
    );
};

SocialLinks.propTypes = {
    socials: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default SocialLinks;
