import translate from '@/services/translate';
import HomeApi from '@/shared/repositories/home/home';
import { Alert } from 'react-native';
import { CLEAR_REPOSITORIES, SET_REPOSITORIES } from './actionTypes';

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
    if (error instanceof Error) {
      Alert.alert(translate('APP.REQUEST_ERROR'), error.message);
    }
  }
};

export const clearRepositories = () => async (dispatch: any) => {
  dispatch({
    type: CLEAR_REPOSITORIES,
    payload: [],
  });
};
