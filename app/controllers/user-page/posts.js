import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import config from 'web-page-by-ember/config/environment';

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
    console.log(config);

    const newPost = this.store.createRecord('post', {
      title: this.newPostTitle,
      body: this.newPostBody,
    });

    newPost.save();

    this.newPostBody = null;
    this.newPostTitle = null;
    this.isFormShowed = false;
  }
}
