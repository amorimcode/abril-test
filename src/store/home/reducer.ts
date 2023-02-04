const initialState: reducers.HomeState = {
  repositories: [],
};

const homeReducer = (state = initialState, action: any): reducers.HomeState => {
  switch (action.type) {
    case 'SET_REPOSITORIES':
      return {
        ...state,
        repositories: [...state.repositories, ...action.payload],
      };

    case 'CLEAR_REPOSITORIES':
      return {
        ...state,
        repositories: [],
      };
    default:
      return state;
  }
};

export default homeReducer;
