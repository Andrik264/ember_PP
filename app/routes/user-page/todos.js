import Route from '@ember/routing/route';

export default class UserPageTodosRoute extends Route {
  async model() {
    const parentModel = this.modelFor('user-page');

    const data = await this.store.query('todo', { user_id: parentModel.id });

    console.log(data);

    return data;
  }
}
