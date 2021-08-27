import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';

export default class UsersController extends Controller {
  queryParams = ['name', 'status', 'gender', 'email', 'page'];
  name = null;
  status = null;
  gender = null;
  email = null;

  @tracked page = 1;

  @computed('model.meta.pagination')
  get pagination() {
    return this.model.meta.pagination;
  }

  @action
  changePage(newPageId) {
    console.log(this.pagination);
    const { pages } = this.pagination;
    console.log('newPageId', newPageId);

    if (newPageId > 0 && newPageId <= pages) {
      console.log('PageId changed');
      this.page = newPageId;
    } else {
      console.log('decline');
    }

    console.log(this.page);
  }
}
