import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import styled, { injectGlobal } from 'styled-components';
import { Router, browserHistory } from 'react-router';
import routes from './routes.js';
import promise from 'redux-promise';

import reducers from './reducers';

injectGlobal`
html {
  width: 100vw;
  height: 100vh;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Helvetica', sans-serif;
}
* {
  box-sizing: inherit;
  outline: 0;
}
a {
  text-decoration: none;
} 
`;


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const Wrapper = styled.div`
  height:100vh;
  width:100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

ReactDOM.render(
  <Wrapper>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </Wrapper>,
  document.getElementById('root')
);
