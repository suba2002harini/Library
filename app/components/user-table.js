import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class UserTableComponent extends Component {
  @tracked ref;
  @tracked uname;
  @tracked uemail;
  @tracked umobile;
  @tracked uid;
  @tracked del = false;
  @tracked isdelete = false;
  @service store;
  @action info(event) {
    this.ref = event.target.id;
    const temp = this.store.peekRecord('user', this.ref);
    this.uname = temp.name;
    this.uemail = temp.email;
    this.umobile = temp.mobile;
    this.uid = temp.uid;
  }
  adding(email, name, num) {
    console.log(this.args.user);
    this.store.findRecord('user', this.ref).then(function (post) {
      post.name = name;
      post.email = email;
      post.mobile = num;
      //post.save();
    });
    this.del = false;
  }
  @action update(event) {
    event.preventDefault();
    this.adding(this.uemail, this.uname, this.umobile);
    this.uemail = '';
    this.uname = '';
    this.umobile = '';
    this.uid = '';
  }
  @action toggles(bol) {
    this.del = bol;
  }
  @action deleted(h) {
    console.log(h);
    let conform = window.confirm('are you sure!');
    if (conform) {
      h.deleteRecord();
      h.save();
      this.isdelete = true;
    }
  }
}
