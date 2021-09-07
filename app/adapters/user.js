import ApplicationAdapter from './application';
import config from '../config/environment';

export default class UserAdapter extends ApplicationAdapter {
  async queryRecord(store, type, query) {
    //query - object with parametres to url string (e.g. name=andrii)
    // const queryString = this.createQueryString(query.queryParams);

    const data = await new Promise((resolver, reject) => {
      fetch(`${config.API_DOMAIN_NAME}/users/${query.user_id}`)
        .then((data) => resolver(data.json()))
        .catch((error) => reject(error));
    });

    return data;
  }

  async query(store, type, query) {
    const users = await new Promise((resolver, reject) => {
      fetch(`${config.API_DOMAIN_NAME}/users?page=${query.page}`)
        .then((data) => resolver(data.json()))
        .catch((error) => reject(error));
    });

    return users;
  }
}
