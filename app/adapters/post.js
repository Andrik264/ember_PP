import ApplicationAdapter from './application';
import config from 'web-page-by-ember/config/environment';

export default class PostAdapter extends ApplicationAdapter {
  async query(store, type, query) {
    console.log('Post || adapter-query: ', query);

    const { user_id } = query;

    const data = await new Promise((resolver, reject) => {
      fetch(`${config.API_DOMAIN_NAME}/users/${user_id}/posts`)
        .then((data) => resolver(data.json()))
        .catch(reject);
    });

    console.log('Post || adapter-return: ', data);

    return data;
  }
}
