import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class BooksEditController extends Controller {
  @action close() {
    this.transitionToRoute('books');
  }
  @service store;
  @tracked bid;
  @tracked bname;
  @tracked bauthor;
  @tracked bcount;
  @tracked bpages;
  @action onload() {
    console.log(this.model);
    const temp = this.store.peekRecord('book', this.model);
    this.bid = temp.bid;
    this.bname = temp.name;
    this.bauthor = temp.author;
    this.bcount = temp.count;
    this.bpages = temp.page;
  }
  update(name, author, count, pages) {
    this.store.findRecord('book', this.model).then(function (post) {
      post.name = name;
      post.author = author;
      post.count = count;
      post.page = pages;
      //post.save();
    });
  }
  @action edit(event) {
    event.preventDefault();
    this.update(this.bname, this.bauthor, this.bcount, this.bpages);
    this.bid = '';
    this.bname = '';
    this.bauthor = '';
    this.bcount = '';
    this.bpages = '';
    this.transitionToRoute('books');
    return this.store.findAll('book');
  }
}
