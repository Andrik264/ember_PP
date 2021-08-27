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
    // debugger

    console.log('model params = ',params);
    const response = await fetch(
      `${config.API_DOMAIN_NAME}/users?page=${params.page}`
    );
    const json = await response.json();

    return json;
  }
}
