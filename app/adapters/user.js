import ApplicationAdapter from './application';
import config from '../config/environment';
import qs from 'query-string';

export default class UserAdapter extends ApplicationAdapter {
  createQueryString(queryParams) {
    const { name, email, gender, status } = queryParams;

    let queryString = qs.stringify(queryParams);

    return queryString;
  }

  async queryRecord(store, type, query) {
    const data = await new Promise((resolver, reject) => {
      fetch(`${config.API_DOMAIN_NAME}/users/${query.user_id}`)
        .then((data) => resolver(data.json()))
        .catch((error) => reject(error));
    });

    return data;
  }

  async query(store, type, query) {
    const { page, queryParams } = query;
    const { name, email, status, gender } = queryParams;

    if (name === '' && email == '' && status === null && gender === null) {
      const users = await new Promise((resolver, reject) => {
        fetch(`${config.API_DOMAIN_NAME}/users?page=${page}`)
          .then((data) => resolver(data.json()))
          .catch((error) => reject(error));
      });

      return users;
    }

    const queryString = this.createQueryString(queryParams);
    const users = await new Promise((resolver, reject) => {
      fetch(`${config.API_DOMAIN_NAME}/users?${queryString}`)
        .then((data) => resolver(data.json()))
        .catch((error) => reject(error));
    });

    return users;
  }
}
