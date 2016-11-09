'use strict';

import OAuth from './api/hello';

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import Root from './components/Root';

window.DnevnikComments = {

	init: (commentsSettings = {}) => {

		const comments = document.getElementById('dnevnik-comments');

		if (comments){

			OAuth.init({
				apiKey: commentsSettings.apiKey,
			});
			
			const store = configureStore(commentsSettings); 
			
			ReactDOM.render(
				<Root store={store} />,
				comments
			);

		}		
	}

};





