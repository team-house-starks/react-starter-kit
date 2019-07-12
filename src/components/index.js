import React, { Fragment } from 'react';

//Internals
import { Provider } from '../store';
import AppContainer from '../Container';

const App = props => {
  return (
    <Provider>
      <AppContainer>{props.children}</AppContainer>
    </Provider>
  );
};

export default App;
