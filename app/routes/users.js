import Route from '@ember/routing/route';
import config from '../config/environment';

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
    // console.log('users model params: ', params);

    const { page } = params;
    const data = await this.store.query('user', { page });

    // console.log('users model adapter result: ', data.toArray());

    return data;
  }
}
