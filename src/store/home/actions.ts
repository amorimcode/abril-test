import HomeApi from '@/shared/repositories/home/home';
import { SET_REPOSITORIES } from './actionTypes';

export type SetRepositoriesAction = {
  type: string;
  payload: any;
};

export const searchRepositories = (search: string, page: number) => async (dispatch: any) => {
  try {
    const data = await HomeApi.searchRepositories(search ?? '', page);

    if (data.items) {
      dispatch({
        type: SET_REPOSITORIES,
        payload: data.items,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const clearRepositories = () => async (dispatch: any) => {
  dispatch({
    type: SET_REPOSITORIES,
    payload: [],
  });
};
