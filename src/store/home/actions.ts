import translate from '@/services/translate';
import HomeApi from '@/shared/repositories/home/home';
import { Alert } from 'react-native';
import { CLEAR_REPOSITORIES, SET_REPOSITORIES } from './actionTypes';

export type SetRepositoriesAction = {
  type: string;
  payload: any;
};

export const setRepository = (payload: any) => ({
  type: SET_REPOSITORIES,
  payload,
});

export const searchRepositories = (search: string, page: number) => async (dispatch: any) => {
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
    if (error instanceof Error) {
      Alert.alert(translate('APP.ERRORS.REQUEST_ERROR'), error.message);
    }
  }
};

export const clearRepositories = () => async (dispatch: any) => {
  dispatch({
    type: CLEAR_REPOSITORIES,
    payload: [],
  });
};
