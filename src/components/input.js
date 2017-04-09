import styled from 'styled-components';

export const Input = styled.input`
  padding: 1rem;
  font-size: 1.2rem;
  width: 80%;
  outline: 0;
  height: 3rem;
  margin: 0.4rem;
  box-shadow: 0px 1px 2px grey;
  border: 0;
  box-shadow: ${ props => props.touched && props.invalid ? '0 0 5px red': '0px 1px 2px grey'};
  `;
