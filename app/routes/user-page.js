import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserPageRoute extends Route {
  @service router;

  redirect() {
    this.router.transitionTo('user-page.posts');
  }

  model(params) {
    // console.log(params);

    const { user_id } = params;

    return this.store.queryRecord('user', { user_id });
  }
}
