import styled from 'styled-components';

export const SubmitBtn = styled.button`
  margin-right: 0.5rem;
  width:  5em;
  height: 3em;
  box-shadow: 0px 1px 2px grey;
  border: none;
  background: ${props => props.cancel? 'red':'skyBlue'}
`;
