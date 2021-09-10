import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class UserPageController extends Controller {
  @service router;
  @tracked selectedTab = 'posts';

  @tracked name = this.user.name;
  @tracked email = this.user.email;
  @tracked gender = this.user.gender;
  @tracked status = this.user.status;

  @action
  selectTab(tabName) {
    // this.transitionToRoute(`user-page.${tabName}`, this.user.id);

    this.selectedTab = tabName;
  }

  @action
  onChange(event) {
    const { name, value } = event.target;

    console.log(name, value);

    this[name] = value;
  }

  @action
  async updateUserInfo() {
    try {
      this.user.name = this.name;
      this.user.email = this.email;
      this.user.status = this.status;
      this.user.gender = this.gender;

      await this.user.save();

      this.send('refreshModel');
    } catch (error) {
      throw `${error.name}  -  ${error.status}`;
    }
  }

  @action
  cancelEditing() {
    this.name = this.user.name;
    this.email = this.user.email;
    this.status = this.user.status;
    this.gender = this.user.gender;
  }

  get user() {
    return this.model;
  }
}
