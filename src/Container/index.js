import React, { Component } from 'react';
import { connect, actions } from '../store';

import AppWrapper from '../components/Wrapper';

class AppContainer extends Component {
  componentDidMount = () => {
    actions.getActivity();
  };

  render() {
    const { activityMockData } = this.props;
    const props = {
      activityMockData
    };
    return <AppWrapper {...props} />;
  }
}

export default connect(state => ({ ...state }))(AppContainer);
