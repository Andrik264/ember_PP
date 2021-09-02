import config from '../config/environment';
import ApplicationAdapter from './application';

export default class UserAdapter extends ApplicationAdapter {
  async queryRecord(store, type, query) {
    //query - object with parametres to url string (e.g. name=andrii)

    // console.log('Apapter -> queryrecord = ', query);

    // const queryString = this.createQueryString(query.queryParams);

    const data = await new Promise((resolver, reject) => {
      fetch(`${config.API_DOMAIN_NAME}/users/${query.user_id}`)
        .then((data) => resolver(data.json()))
        .catch((error) => reject(error));
    });

    // console.log('Adapter -> fetch result = ', data);

    return data;
  }

  async query(store, type, query) {
    console.log('users adapter query:', query);

    const users = await new Promise((resolver, reject) => {
      fetch(`${config.API_DOMAIN_NAME}/users?page=${query.page}`)
        .then((data) => resolver(data.json()))
        .catch((error) => reject(error));
    });
    console.log('users adapter -> fetch result: ', users);

    return users;
  }
}
