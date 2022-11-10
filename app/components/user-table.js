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
@service store;
@action info(event)
{       
    this.ref=event.target.id;
    console.log(this.args.user);
    const temp=this.store.peekRecord('user', this.ref);
    this.uname = temp.name;
    this.uemail = temp.email;
    this.umobile = temp.mobile;
    this.uid = temp.uid;
    console.log(this.uname);
        
}
adding(email, name, num) {
    this.store.findRecord('user', this.ref).then(function(post ) {
    post.name = name;
    post.email = email;
    post.mobile = num;
    post.save(); 
});
}
@action update(event)
{    
    event.preventDefault();
        this.adding(this.uemail, this.uname, this.umobile);
        this.uemail = '';
        this.uname = '';
        this.umobile = '';
        this.uid= '';
}
}
