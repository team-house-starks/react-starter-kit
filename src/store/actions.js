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
      actions.changeValue({ activityMockData: activityMockData.tours });
    }
    return [];
  },

  updateSearch: (state, actions, data) => {
    actions.changeValue({ search: data });
    return [];
  }
};

export default actionsCreators;
