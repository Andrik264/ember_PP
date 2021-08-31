import Route from '@ember/routing/route';

export default class UserPagePostsRoute extends Route {

  model(params) {
    console.log(params.user_id);
  }
}
