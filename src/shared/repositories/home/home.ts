import { getInstance } from '@/shared/repositories/instance';

const HomeApi = {
  searchRepositories: async (search: string, page: number) => {
    const instance = getInstance();
    const { data } = await instance.get<models.RepositoriesResponse>('search/repositories', {
      params: {
        q: search,
        per_page: 15,
        page,
      },
    });

    return data;
  },
};

export default HomeApi;
