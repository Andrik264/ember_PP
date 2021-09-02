import Route from '@ember/routing/route';

export default class UserPageTodosRoute extends Route {
  async model(params) {
    console.log('user todos params: ', params);
  }
}
