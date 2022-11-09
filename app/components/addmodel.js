import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class AddmodelComponent extends Component {
  @tracked uid;
  @tracked uname;
  @tracked uemail;
  @tracked unumber;
  @action adduser(event) {
    console.log(
      'name' + this.uname + 'email' + this.uemail + 'mobile' + this.unumber
    );
    event.preventDefault();

    if (
      this.uid &&
      this.uemail &&
      this.args.onCreate &&
      this.uname &&
      this.unumber
    ) {
      this.args.onCreate(this.uid, this.uemail, this.uname, this.unumber);
      this.uid = '';
      this.uemail = '';
      this.uname = '';
      this.unumber = '';
    }
  }
}
