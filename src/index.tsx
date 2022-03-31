import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@Global/global';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './App/store';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
