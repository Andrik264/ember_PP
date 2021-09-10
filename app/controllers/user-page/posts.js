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
  onSubmit() {
    console.log(this.model);
    const { user_id } = this.model.query;

    const newPost = this.store.createRecord('post', {
      user_id,
      title: this.newPostTitle,
      body: this.newPostBody,
    });

    newPost.save();

    this.newPostBody = null;
    this.newPostTitle = null;
    this.isFormShowed = false;

    this.send('refreshModel');
  }
}
