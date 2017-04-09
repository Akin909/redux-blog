import { Link } from 'react-router';
import styled from 'styled-components';

  // width: 100%;
  // height: 100%;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin-right: 1rem;
  padding: 0.6rem;
`;

export default  StyledLink;
