import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserPageRoute extends Route {
  @service router;

  // redirect() {
  //   this.router.transitionTo('user-page.posts');
  // }

  async model(params) {
    // console.log(params);

    const { user_id } = params;
    const user = await this.store.queryRecord('user', { user_id });
    // const posts = await this.store.query('post', { user_id });

    // console.log('user-page || model-return', {
    //   user,
    //   posts,
    // });

    // return {
    //   user,
    //   posts,
    // };
    return user;
  }
}
