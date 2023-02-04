import { render } from '@testing-library/react-native';

import RepositoriesList from '.';

import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from '@/styles/theme';
import { searchRepositories } from '@/store/home/actions';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from '@/store';

describe('RepositoriesList render', () => {
  test('should render correctly', () => {
    const dispatch = jest.fn();
    const repositories = dispatch(searchRepositories('teste', 1));

    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <RepositoriesList
              repositories={repositories}
              search="teste"
              page={1}
              setPage={function (value: number): void {
                throw new Error('Function not implemented.');
              }}
            />
          </ThemeProvider>
        </NavigationContainer>
      </Provider>
    );

    expect(getByTestId('repositories-list')).toBeTruthy();
  });
});
