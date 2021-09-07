import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  queryParams = {
    name: {
      refreshModel: true,
    },
    status: {
      refreshModel: true,
    },
    gender: {
      refreshModel: true,
    },
    email: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
  };

  async model(params) {
    const { page } = params;
    const data = await this.store.query('user', { page });

    return data;
  }
}
