import ApplicationAdapter from './application';
import config from '../config/environment';
import qs from 'query-string';

const allUsers_URL = `${config.API_DOMAIN_NAME}/users`;
const getUser = (user_id) => `${allUsers_URL}/${user_id}`;

export default class UserAdapter extends ApplicationAdapter {
  async queryRecord(store, type, query) {
    const { user_id } = query;

    return await this.ajax(`${getUser(user_id)}`, 'GET');
  }

  async query(store, type, query) {
    const { page, queryParams } = query;
    const { name, email, status, gender } = queryParams;

    const queryString = this.createQueryString(queryParams);

    return await this.ajax(`${allUsers_URL}?${queryString}`, 'GET');
  }
}
