import ApplicationAdapter from './application';
import config from '../config/environment';

const allUsers_URL = `${config.API_DOMAIN_NAME}/users`;
const getUser = (user_id) => `${allUsers_URL}/${user_id}`;

export default class UserAdapter extends ApplicationAdapter {
  async updateRecord(store, type, snapshot) {
    const { _attributes, id } = snapshot;
    const data = JSON.stringify(_attributes);

    return await this.ajax(`${getUser(id)}`, 'PATCH', { data });
  }

  async queryRecord(store, type, query) {
    const { user_id } = query;

    return await this.ajax(`${getUser(user_id)}`, 'GET');
  }

  async query(store, type, query) {
    const { queryParams } = query;

    const queryString = this.createQueryString(queryParams);

    return await this.ajax(`${allUsers_URL}?${queryString}`, 'GET');
  }
}
