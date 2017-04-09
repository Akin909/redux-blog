import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Children = styled.div`
  width: 100%;
  height: 100%;

`;
class App extends Component {
  render() {
    return (
      <Container>
        <Children>{this.props.children}</Children>
      </Container>
      );
  }
}


export default App;
