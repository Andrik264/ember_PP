import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class UserPostsComponent extends Component {
  @service store;
  @action
  async deletePost(post_id) {
    try {
      await store.deleteRecord('post', { post_id });
    } catch (error) {
      throw new Error(error);
    }
  }
}
