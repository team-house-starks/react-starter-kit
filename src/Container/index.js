import React, { Component } from 'react';
import { connect, actions } from '../store';

import AppWrapper from '../components/Wrapper';

class AppContainer extends Component {
  componentDidMount = () => {
    actions.getActivity();
  };

  render() {
    return <AppWrapper />;
  }
}

export default connect(state => ({ ...state }))(AppContainer);
