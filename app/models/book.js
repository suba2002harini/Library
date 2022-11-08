import Model, { attr } from '@ember-data/model';

export default class BookModel extends Model {
  @attr name;
  @attr author;
  @attr count;
  @attr page;
}
