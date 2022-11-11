import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr uid;
  @attr name;
  @attr email;
  @attr mobile;
}
