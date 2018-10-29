import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from './reducers/postReducer';

const persistConfig = {
	key: 'root',
	storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(pReducer);
const persistor = persistStore(store)


ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={<div>loading</div>} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
	, document.getElementById('root')
);


