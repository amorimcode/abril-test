import translate from '@/services/translate';
import HomeApi from '@/shared/repositories/home/home';
import { Alert } from 'react-native';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { CLEAR_REPOSITORIES, SET_REPOSITORIES } from './actionTypes';

export type SetRepositoriesAction = {
  type: string;
  payload: any;
};

export const setRepository = (payload: any) => ({
  type: SET_REPOSITORIES,
  payload,
});

export const searchRepositories =
  (search: string, page: number) =>
  async (dispatch: ThunkDispatch<void, reducers.HomeState, SetRepositoriesAction>) => {
    try {
      if (search) {
        const data = await HomeApi.searchRepositories(search ?? '', page);
        if (data.items) {
          dispatch({
            type: SET_REPOSITORIES,
            payload: data.items ?? [],
          });
        }
      } else {
        dispatch({
          type: SET_REPOSITORIES,
          payload: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

export const clearRepositories = () => async (dispatch: Dispatch<SetRepositoriesAction>) => {
  dispatch({
    type: CLEAR_REPOSITORIES,
    payload: [],
  });
};
