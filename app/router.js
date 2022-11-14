import EmberRouter from '@ember/routing/router';
import config from 'library/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('books', function () {
    this.route('add');
    this.route('edit', { path: 'edit/:edit_id' });
  });
});
