import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostsController extends Controller {
  queryParams = ['page'];

  @tracked page = 1;
  @tracked title = null;

  @action
  changePage(newPageId) {
    if (this.page >= 1) {
      this.page = newPageId;
    }
  }

  @action
  onChangeFilter(event) {
    const { name, value } = event.target;

    if (value === '') {
      this[name] = null;
    } else {
      this[name] = value;
    }
  }

  get pagination() {
    return this.model.meta.pagination;
  }

  @action
  async deletePost(post_id) {
    try {
      await this.store
        .findRecord('post', post_id, { reload: true })
        .then((post) => {
          post.destroyRecord();
        });
    } catch (error) {
      throw new Error(error);
    }
  }
}
