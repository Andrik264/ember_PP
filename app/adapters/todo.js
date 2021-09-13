import ApplicationAdapter from './application';
import config from 'web-page-by-ember/config/environment';

const { API_DOMAIN_NAME } = config;
const allTodos_URL = `${API_DOMAIN_NAME}/todos`;
const getTodo = (todo_id) => `${allTodos_URL}/${todo_id}`;

export default class TodoAdapter extends ApplicationAdapter {
  async updateRecord(store, type, snapshot) {
    const { id, _attributes } = snapshot;
    const data = JSON.stringify(_attributes);

    return await this.ajax(getTodo(id), 'PATCH', { data });
  }

  async createRecord(store, type, snapshot) {
    const { _attributes } = snapshot;
    const data = JSON.stringify(_attributes);

    return await this.ajax(allTodos_URL, 'POST', { data });
  }

  async query(store, type, query) {
    const { user_id } = query;

    return await this.ajax(
      `${config.API_DOMAIN_NAME}/users/${user_id}/todos`,
      'GET'
    );
  }
}
