import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UserPageController extends Controller {
  // user = this.model.user.data;
  // posts = this.model.posts.data;
  @tracked selectedTab = 'posts';

  //  && this.transtiionToRoute

  @action
  selectTab(tabName) {
    // this.transitionToRoute('user-page/posts', this.user.id);
    this.selectedTab = tabName;
  }

  get user() {
    return this.model.user.data;
  }

  get posts() {
    return this.model.posts.data;
  }

  get fullInfo() {
    return { ...this.user, ...this.posts };
  }
}
