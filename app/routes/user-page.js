import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserPageRoute extends Route {
  @service router;

  redirect() {
    this.router.transitionTo('user-page.posts');
  }

  async model(params) {
    const { user_id } = params;
    const user = await this.store.queryRecord('user', { user_id });

    return user;
  }
}
