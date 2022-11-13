import Model, { attr } from '@ember-data/model';

export default class BookModel extends Model {
  @attr bid;
  @attr name;
  @attr author;
  @attr count;
  @attr page;
}
