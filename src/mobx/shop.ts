import {action, makeObservable, observable} from 'mobx';

class Shop {
  show = false;

  constructor() {
    makeObservable(this, {
        show: observable,
        change: action,
    });
  }

  change() {
    this.show = !this.show
  }
}

const shop = new Shop();

export default shop;
