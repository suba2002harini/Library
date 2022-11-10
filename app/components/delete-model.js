import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class DeleteModelComponent extends Component {
  @service store;
  @action delete(event) {
    event.preventDefault();
    this.store.findRecord('user', this.args.id).then(function (post) {
      post.destroyRecord();
      console.log(post.isDeleted);
      post.save();
    });
    this.args.toggles(false);
  }
  @action toggling() {
    this.args.toggles(false);
  }
}
