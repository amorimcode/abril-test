import React, { useState } from 'react';
import translate from '@/services/translate';
import { HomeTitle, HomeView } from './styles';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
import RepositoriesList from '@/components/RepositoriesList';

const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <HomeView>
      <HomeTitle>{translate('APP.SCREENS.HOME.TITLE')}</HomeTitle>

      <AdvancedSearchBar
        value={search}
        setValue={setSearch}
        style={{ width: '90%', height: 36, borderRadius: 10, margin: 16 }}
      />

      <RepositoriesList></RepositoriesList>
    </HomeView>
  );
};

export default Home;
