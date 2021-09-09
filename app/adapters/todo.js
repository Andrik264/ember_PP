import ApplicationAdapter from './application';
import config from 'web-page-by-ember/config/environment';

export default class TodoAdapter extends ApplicationAdapter {
  async query(store, type, query) {
    const { user_id } = query;

    return await this.ajax(
      `${config.API_DOMAIN_NAME}/users/${user_id}/todos`,
      'GET'
    );
  }
}
