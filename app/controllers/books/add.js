import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class BooksAddController extends Controller {
  @service store;
  @tracked bid;
  @tracked bname;
  @tracked bauthor;
  @tracked bcount;
  @tracked bpages;
  @action addbook() {
    console.log('name' + this.bname);
    this.store.push({
      data: [
        {
          id: this.bid,
          type: 'book',
          attributes: {
            bid: this.bid,
            name: this.bname,
            author: this.bauthor,
            count: this.bcount,
            page: this.bpages,
          },
        },
      ],
    });
    this.bid = '';
    this.bname = '';
    this.bauthor = '';
    this.bcount = '';
    this.bpages = '';
    this.transitionToRoute('books');
    return this.store.findAll('book');
  }
  @action close() {
    this.transitionToRoute('books');
  }
}
