import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class IndexController extends Controller {
  @service store;
  @action
  addMessage(id, email, name, num) {
    this.store.push({
      data: [
        {
          id: id,
          type: 'user',
          attributes: {
            uid: id,
            name: name,
            email: email,
            mobile: num,
          },
        },
      ],
    });
    return this.store.findAll('user');
  }
  @tracked check = false;
  @action toggle(bol) {
    this.check = bol;
  }
}
