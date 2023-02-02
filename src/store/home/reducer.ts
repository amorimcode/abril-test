const initialState: reducers.HomeState = {
  repositories: [],
};

const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_REPOSITORIES':
      return {
        ...state,
        repositories: action.payload,
      };
    default:
      return state;
  }
};
export default homeReducer;
