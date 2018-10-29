import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import throttle from 'lodash/throttle';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/postReducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(
	rootReducer,
	persistedState
);

store.subscribe(throttle(() => {
  saveState(
    store.getState()
  );
}, 1000));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);


