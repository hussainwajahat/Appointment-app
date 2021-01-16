import { AsyncStorage } from "react-native";

export const persistState = async (stateKey, state) => {
  try {
    const serializedState = JSON.stringify(state);
    await AsyncStorage.setItem(stateKey, serializedState);
  } catch (err) {}
};

export const loadState = async (stateKey) => {
  try {
    const serializedState = await AsyncStorage.getItem(stateKey);

    if (serializedState === null) {
      return;
    }

    return await JSON.parse(serializedState);
  } catch (err) {
    return;
  }
};
