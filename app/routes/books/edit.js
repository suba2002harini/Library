import Route from '@ember/routing/route';

export default class BooksEditRoute extends Route {
  model(params) {
    const { edit_id } = params;
    return edit_id;
  }
}
