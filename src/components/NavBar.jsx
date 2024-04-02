
import { Flex, Link} from '@chakra-ui/react';
import styled from 'styled-components';

const StyledNavBar = styled(Flex)`
  background-color: #2d3748;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  margin-right: 1rem;
 
  &:hover {
    text-decoration: underline green 5px;
    
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar alignItems="center">
      <Flex>
        <StyledLink href=""></StyledLink>
        <StyledLink href="#"></StyledLink>
        <StyledLink href="#"></StyledLink>
      </Flex>
     
    
    </StyledNavBar>
  );
};

export default NavBar;
