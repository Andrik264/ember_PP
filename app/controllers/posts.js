import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostsController extends Controller {
  queryParams = ['page'];

  @tracked page = 1;

  @action
  changePage(newPageId) {
    if (this.page >= 1) {
      this.page = newPageId;
    }
  }

  get pagination() {
    return this.model.meta.pagination;
  }
}
