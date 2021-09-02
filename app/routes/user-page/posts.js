import Route from '@ember/routing/route';

export default class UserPagePostsRoute extends Route {
  async model(params) {
    console.log('post model params: ', params);
    const { user_id } = params;
    const posts = await this.store.query('post', { user_id });
  }
}
