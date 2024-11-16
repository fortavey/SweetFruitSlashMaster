import {action, makeObservable, observable} from 'mobx';

class Points {
  value = 0;

  constructor() {
    makeObservable(this, {
        value: observable,
        add: action,
        reset: action,
    });
  }

  add(){
    this.value++
  }

  reset() {
    this.value = 0
  }
}

const points = new Points();

export default points;
