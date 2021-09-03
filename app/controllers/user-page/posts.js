import Controller from '@ember/controller';

export default class UserPagePostsController extends Controller {
  get info() {
    console.log('Posts // controller -> this.model ', this.model);
  }
}
