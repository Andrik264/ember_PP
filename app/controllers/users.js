import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UsersController extends Controller {
  queryParams = ['name', 'status', 'gender', 'email', 'page'];

  @tracked selectedUserId = null;
  @tracked name = null;
  @tracked email = null;
  @tracked status = null;
  @tracked gender = null;

  @tracked page = 1;

  // @computed('model.meta.pagination')
  get pagination() {
    return this.model.meta.pagination;
  }

  @action
  changePage(newPageId) {
    const { pages } = this.pagination;

    if (newPageId > 0 && newPageId <= pages) {
      this.page = newPageId;
    }
  }

  @action
  onChangeFilter(event) {
    const { name, value } = event.target;

    if (value === 'all' || value === '') {
      this[name] = null;
    } else {
      this[name] = value;
    }
  }

  @action
  selectUser(userId) {
    this.selectedUserId = userId;
  }
}
