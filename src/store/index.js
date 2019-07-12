import createStore from 'react-waterfall';
import actionsCreators from './actions';

const config = {
  initialState: {
    activityMockData: [],
    search: ''
  },
  actionsCreators
};

export const {
  Provider,
  connect,
  actions,
  subscribe,
  unsubscribe
} = createStore(config);
