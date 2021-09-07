import Route from '@ember/routing/route';

export default class UserPagePostsRoute extends Route {
  async model(params, transition) {
    const parentModel = this.modelFor('user-page');

    const data = await this.store.query('post', { user_id: parentModel.id });

    return data;
  }
}
