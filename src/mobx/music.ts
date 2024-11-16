import {action, makeObservable, observable} from 'mobx';

class Music {
  value = null;

  constructor() {
    makeObservable(this, {
        value: observable,
        change: action,
    });
  }

  change(bool) {
    this.value = bool
  }
}

const music = new Music();

export default music;
