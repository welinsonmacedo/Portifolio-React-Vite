
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
  background-color: #007bff; 
  color: #fff; 
  padding: 10px 20px; 
  font-size: 16px; 
  border: none; 
  border-radius: 4px; 
  cursor: pointer; 
  transition: background-color 0.3s ease; 
  margin:20px;
  width: 150px;

  
  &:hover {
    background-color: #0056b3; 
  }


  &:disabled {
    background-color: #6c757d; 
    cursor: not-allowed; 
  }
`;


const Button = ({ children, onClick, disabled }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func, 
    disabled: PropTypes.bool, 
  };

export default Button;
