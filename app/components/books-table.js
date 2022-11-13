import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class BooksTableComponent extends Component {
  @action delete(h) {
    console.log(h);
    let conform = window.confirm('are you sure!');
    if (conform) {
      h.destroyRecord();
      //h.save();
    }
  }
}
