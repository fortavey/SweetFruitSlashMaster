import {action, makeObservable, observable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Knifes {
  value = 0;
  current = 0

  constructor() {
    makeObservable(this, {
        value: observable,
        addValue: action,
        addCurrent: action,
        setValue: action,
        setCurrent: action
    });
  }

  setValue(val){
    this.value = val
  }

  setCurrent(val){
    this.current = val
  }

  async addValue(val) {
    this.value = val
    try {
      await AsyncStorage.setItem('knifes', String(this.value));
    } catch (e) {
      // saving error
    }
  }

  async addCurrent(val) {
    this.value = val
    try {
      await AsyncStorage.setItem('current_knife', String(this.value));
    } catch (e) {
      // saving error
    }
  }
}

const knifes = new Knifes();

export default knifes;
