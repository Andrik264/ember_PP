import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UsersController extends Controller {
  queryParams = ['name', 'status', 'gender', 'email', 'page'];

  @tracked selectedUserId = null;
  name = null;
  email = null;
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

    switch (name) {
      case 'statusFilter':
        this.status = value;
        break;

      case 'genderFilter':
        if (value === 'all') {
          this.gender = null;
          break;
        }
        this.gender = value;
        break;

      default:
        break;
    }
  }

  @action
  selectUser(userId) {
    this.selectedUserId = userId;
  }
}
