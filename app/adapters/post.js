import ApplicationAdapter from './application';
import config from 'web-page-by-ember/config/environment';

const { API_DOMAIN_NAME } = config;
const allPosts_URL = `${API_DOMAIN_NAME}/posts`;
const userPosts_URL = (user_id) => `${API_DOMAIN_NAME}/users/${user_id}/posts`;

export default class PostAdapter extends ApplicationAdapter {
  async createRecord(modelName, inputProperties) {
    return await this.ajax(`${allPosts_URL}`, 'POST');
  }

  async query(store, type, query) {
    const { user_id, queryParams } = query;

    const queryString = this.createQueryString(queryParams);

    return await this.ajax(
      user_id
        ? `${userPosts_URL(user_id)}${queryString}`
        : `${allPosts_URL}?${queryString}`,
      'GET'
    );
  }
}
