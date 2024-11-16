import {action, makeObservable, observable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import points from './points';

class Coins {
  value = 0;

  constructor() {
    makeObservable(this, {
        value: observable,
        inc: action,
        dec: action,
        start: action
    });
  }

  start(val){
    this.value = val
  }

  async inc(val) {
    this.value += val
    try {
      await AsyncStorage.setItem('coins', String(this.value));
    } catch (e) {
      // saving error
    }
    points.reset()
  }
  dec(val){
    if(this.value >= val) {
        this.value -= val
    }
  }
}

const coins = new Coins();

export default coins;
