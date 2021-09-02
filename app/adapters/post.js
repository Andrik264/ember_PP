import ApplicationAdapter from './application';
import config from 'web-page-by-ember/config/environment';

export default class PostAdapter extends ApplicationAdapter {
  async query(store, type, query) {
    console.log(query);
    // const data = await fetch(`${config.API_DOMAIN_NAME}/users`)
  }
}
