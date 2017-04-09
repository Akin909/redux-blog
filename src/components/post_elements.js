import styled from 'styled-components';

export const PostElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:90%;
  height: ${ (props) => props.single? '20%': '90%'};
  background: ${ (props) => props.content? 'white': ''};
  padding: 1rem;
  outline: 0;
  border: none;
  box-shadow: ${(props) => props.content? '0px 1px 2px grey':''};
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 60%;
  font-size: 1.3rem;
  margin: 0.4rem;
  border: 0;
  box-shadow: ${(props) => props.touched && props.invalid ? '0 0 5px red': '0px 1px 2px grey'};
`;

export const Container = styled.div`
  background:#cfd3d3;
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const NavBar = styled.header`
  width: 100%
  height: 10%
  padding: 0.3rem;
  display: flex;
  box-shadow: 0px 1px 2px grey;
  background: ${ props => props.small? '': 'skyBlue'};
  justify-content: space-between;
`;
export const BlogTitle = styled.h3`
  margin:${ props => props.small? '0.5rem': '0'};
  display: flex;
  padding:1rem;
  height: 10%;
  text-align: center;
  border: none;
`;

export const PostItem = styled.li`
  width: 100%;
  height: ${ (props) => props.single? '30%': '80%'};
  background-color: white;
  margin: 0.3rem;
  box-shadow: 0px 1px 3px grey;
  display: flex;
  justify-content: space-between;
`;
