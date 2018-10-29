import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

import rootReducer from './reducers/postReducer';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);


