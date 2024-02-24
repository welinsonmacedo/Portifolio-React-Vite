
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.a`
  background-color: #b2c4d8; 
  text-align: center;
  color: #463c3c; 
  padding: 10px 20px; 
  font-size: 16px; 
  border: none; 
  border-radius: 4px; 
  cursor: pointer; 
  transition: background-color 0.3s ease; 
  margin:20px;
  width: 150px;

  
  &:hover {
    background-color: #e1e2e4; 
  }


  &:disabled {
    background-color: #6c757d; 
    cursor: not-allowed; 
  }
`;


const Button = ({ children, onClick, disabled,link }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled} href={link}>
      {children} 
    </ButtonStyled>
  );
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func, 
    disabled: PropTypes.bool, 
    link:PropTypes.string
  };

export default Button;
