import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class UserPageController extends Controller {
  @service router;
  @tracked selectedTab = 'posts';

  @action
  selectTab(tabName) {
    // this.router.transitionTo(`user-page.${tabName}`, this.user.id);

    this.selectedTab = tabName;
  }

  get user() {
    console.log('user-page model result:', this.model);

    return this.model;
  }
}
