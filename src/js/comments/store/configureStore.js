import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import rootReducer from '../reducers/index';
import defaultCommentsSettings from './defaultCommentsSettings';

const configureStore = (commentsSettings) => {
	
	const persistedState = {
		comments: {
			settings: {
				...defaultCommentsSettings,
				...commentsSettings,
			},
		},
	};

	console.log(persistedState);

	const store = createStore(	rootReducer, 
								persistedState,
								applyMiddleware(
									thunkMiddleware,
									loggerMiddleware({collapsed: true}),
								)	
							);
	return store;
}

export default configureStore;
