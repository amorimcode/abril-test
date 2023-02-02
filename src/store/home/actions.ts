import HomeApi from '@/shared/repositories/home/home';
import { SET_REPOSITORIES } from './actionTypes';

export type SetRepositoriesAction = {
  type: string;
  payload: any;
};

export const searchRepositories = (search: string) => async (dispatch: any) => {
  try {
    const data = await HomeApi.searchRepositories(search);

    dispatch({
      type: SET_REPOSITORIES,
      payload: data.items,
    });
  } catch (error) {
    console.log(error);
  }
};
