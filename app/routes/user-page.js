import Route from '@ember/routing/route';
import config from '../config/environment';

export default class UserPageRoute extends Route {
  async model(params) {
    const { user_id } = params;

    const user = await fetch(`${config.API_DOMAIN_NAME}/users/${user_id}`);
    const userJson = await user.json();

    const posts = await fetch(
      `${config.API_DOMAIN_NAME}/users/${user_id}/posts`
    );
    const postsJson = await posts.json();

    return {
      user: { ...userJson },
      posts: { ...postsJson },
    };
  }
}
