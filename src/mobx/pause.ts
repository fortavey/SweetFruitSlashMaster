import {action, makeObservable, observable} from 'mobx';

class Pause {
  value = false;

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

const pause = new Pause();

export default pause;
