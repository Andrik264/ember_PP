import ApplicationAdapter from './application';
import config from 'web-page-by-ember/config/environment';

export default class PostAdapter extends ApplicationAdapter {
  async query(store, type, query) {
    const { user_id, page } = query;
    const data = await new Promise((resolver, reject) => {
      page
        ? fetch(`${config.API_DOMAIN_NAME}/posts?page=${page}`)
            .then((data) => resolver(data.json()))
            .catch(reject)
        : fetch(`${config.API_DOMAIN_NAME}/users/${user_id}/posts`)
            .then((data) => resolver(data.json()))
            .catch(reject);
    });

    return data;
  }
}
