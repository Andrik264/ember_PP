import ApplicationAdapter from './application';
import config from 'web-page-by-ember/config/environment';

export default class TodoAdapter extends ApplicationAdapter {
  async query(store, type, query) {
    const { user_id } = query;

    const data = await new Promise((resolver, reject) => {
      fetch(`${config.API_DOMAIN_NAME}/users/${user_id}/todos`)
        .then((data) => resolver(data.json()))
        .then(reject);
    });

    return data;
  }
}
