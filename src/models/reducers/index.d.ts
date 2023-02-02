export as namespace reducers;

export type HomeState = {
  repositories: models.item[];
};

export type ReduxState = {
  home: HomeState;
};
