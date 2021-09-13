import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UserPagePostsController extends Controller {
  @tracked isFormShowed = false;
  @action
  changeFormStatus() {
    this.isFormShowed = !this.isFormShowed;
  }

  @tracked newPostTitle = null;
  @tracked newPostBody = null;

  @action
  async onSubmit() {
    const { user_id } = this.model.query;

    const newPost = await this.store.createRecord('post', {
      user_id,
      title: this.newPostTitle,
      body: this.newPostBody,
    });

    await newPost.save();

    this.send('refreshModel');

    this.newPostBody = null;
    this.newPostTitle = null;
    this.isFormShowed = false;
  }

  @action
  async deletePost(post_id) {
    try {
      await this.store.find('post', post_id).then((post) => {
        post.deleteRecord();
        post.save();
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
