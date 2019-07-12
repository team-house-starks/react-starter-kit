import activityMockData from '../MockData/data';

const actionsCreators = {
  changeValue: (state, actions, value) => {
    return { ...value };
  },
  updateState: (state, actions, payload) => {
    return payload;
  },

  getActivity: (state, actions) => {
    if (activityMockData) {
      actions.changeValue({ activityMockData: activityMockData });
    }
    return {};
  }
};

export default actionsCreators;
