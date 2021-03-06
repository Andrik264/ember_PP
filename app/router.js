import EmberRouter from '@ember/routing/router';
import config from 'web-page-by-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('users');
  this.route('posts');
  this.route('user-page', { path: '/user/:user_id' }, function () {
    this.route('posts');
    this.route('todos');
  });
});
