import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class IndexController extends Controller {
  @service store;
  @action
  addMessage(id, email, name, num) {
    const newPost = this.store.createRecord('user', {
      uid: id,
      name: name,
      email: email,
      mobile: num,
    });

    try {
      newPost.save();
      console.log(newPost);
      //      this.router.transitionTo('rental', newPost.id);
      return newPost;
    } catch (error) {
      console.log(error);
    }
    return this.store.findAll('user');
    //   this.messages = [
    //     ...this.messages,
    //     {
    //       name: name,
    //       email: email,
    //       content:num,
    //     },
    //   ];
  }

  // @tracked messages = [
  // ];
}
