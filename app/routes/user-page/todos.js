import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class UserPageTodosRoute extends Route {
  async model() {
    const parentModel = this.modelFor('user-page');

    const data = await this.store.query('todo', { user_id: parentModel.id });

    return data;
  }

  @action
  refreshModel() {
    this.refresh();
  }
}
