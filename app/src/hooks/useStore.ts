import {STORE_TOKEN_KEY} from 'src/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = () => {
  const setToken = async (value: string) => {
    await AsyncStorage.setItem(STORE_TOKEN_KEY, value);
  };

  const getToken = async () => {
    return await AsyncStorage.getItem(STORE_TOKEN_KEY);
  };

  const removeToken = async () => {
    await AsyncStorage.removeItem(STORE_TOKEN_KEY);
  };

  return {
    setToken,
    getToken,
    removeToken,
  };
};

export default useStore;
