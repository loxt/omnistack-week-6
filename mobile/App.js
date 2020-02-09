import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
      <Routes />
    </>
  );
}

export default App;
