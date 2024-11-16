import AsyncStorage from '@react-native-async-storage/async-storage';
import coins from "../mobx/coins";
import knifes from "../mobx/knifes";

const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('coins');
      if (value !== null) {
        coins.start(+value)
      }else {
        await AsyncStorage.setItem('coins', '0');
      }
    } catch (e) {
      console.log('ERROR AsyncStorage coins');
    }
  
    try {
      const value = await AsyncStorage.getItem('knifes');
      if (value !== null) {
        knifes.setValue(+value)
      }else {
        await AsyncStorage.setItem('knifes', '0');
      }
    } catch (e) {
      console.log('ERROR AsyncStorage knifes');
    }
  
    try {
      const value = await AsyncStorage.getItem('current_knife');
      if (value !== null) {
        knifes.setCurrent(+value)
      }else {
        await AsyncStorage.setItem('current_knife', '0');
      }
    } catch (e) {
      console.log('ERROR AsyncStorage current_knife');
    }
  };

  export default getData