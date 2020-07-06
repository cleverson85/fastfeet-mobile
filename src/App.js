import 'react-native-gesture-handler';
import React, { useEffect, useStete } from 'react';
import { Keyboard, Platform } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import Routes from './routes';

export default function App() {
  // const [visible, setVisible] = useStete(true);

  // useEffect(() => {
  //   if (Platform.OS === 'ios') {
  //     const keyboardEventListeners = [
  //       Keyboard.addListener('keyboardDidShow', setVisible(false)),
  //       Keyboard.addListener('keyboardDidHide', setVisible(true)),
  //     ];
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
