import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import App from './components/App.js'
import reducers from './reducers';
import './master.css';
import fbConfig from './config/fbConfig';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(fbConfig),
  ),
);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.querySelector('#root'),
);
