import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './src/reducers/rootReducer';
import { createLogger} from 'redux-logger';

const logger = createLogger();
const store = createStore(rootReducer, compose(applyMiddleware(logger)));

const Root = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root);