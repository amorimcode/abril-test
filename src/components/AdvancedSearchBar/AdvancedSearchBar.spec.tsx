import { render } from '@testing-library/react-native';

import AdvancedSearchBar from '@/components/AdvancedSearchBar';
import React from 'react';
import { searchRepositories } from '@/store/home/actions';
import { ThemeProvider } from 'styled-components/native';
import theme from '@/styles/theme';

describe('AdvancedSearchBar render', () => {
  const dispatch = jest.fn();

  const myInitialState = 'My Initial State';
  React.useState = jest.fn().mockReturnValue([myInitialState, {}]);

  const onSearch = async () => {
    await dispatch(searchRepositories(myInitialState, 1));
  };

  test('should render correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <AdvancedSearchBar
          onSubmitEditing={onSearch}
          setValue={function (value: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </ThemeProvider>
    );

    expect(getByTestId('advanced-search-bar')).toBeTruthy();
  });
});

describe('AdvancedSearchBar interactions', () => {
  test('should call on search when searchbar goes out of focus', () => {
    const onSearch = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <AdvancedSearchBar
          onSubmitEditing={onSearch}
          setValue={function (value: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </ThemeProvider>
    );

    const searchbar = getByTestId('advanced-search-bar');

    searchbar.props.onBlur();

    expect(onSearch).toHaveBeenCalled();
  });

  test('should call on search when searchbar is submitted', () => {
    const onSearch = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <AdvancedSearchBar
          onSubmitEditing={onSearch}
          setValue={function (value: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </ThemeProvider>
    );

    const searchbar = getByTestId('advanced-search-bar');

    searchbar.props.onSubmitEditing();

    expect(onSearch).toHaveBeenCalled();
  });
});
