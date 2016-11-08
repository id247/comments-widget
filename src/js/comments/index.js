'use strict';

import OAuth from './api/hello';
import Settings from './api/settings';

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import Root from './components/Root';

window.DnevnikComments = {

	init: (o = {}) => {

		const comments = document.getElementById('dnevnik-comments');

		if (comments){

			OAuth.init({
				apiKey: o.apiKey,
			});

			Settings.init(o);

			const store = configureStore(); 
			
			ReactDOM.render(
				<Root store={store} />,
				comments
			);

		}		
	}

};





