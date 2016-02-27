import React from 'react';
import ReactDOM from 'react-dom';
import {VotingContainer} from './components/Voting';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';

import {setState} from './action_creators';

import {Router, Route} from 'react-router';
import App from './components/App';
import {ResultsContainer} from './components/Results';

import io from 'socket.io-client';

import remoteActionMiddleware from './remote_action_middleware';

const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware(socket))(createStore);

const store = createStoreWithMiddleware(reducer);
const socket = io(`${location.protocol}//${location.hostname}:8090`);

socket.on('state', state => store.dispatch(setState(state)));

const routes = <Route component={App}>
								<Route path="/results" components={ResultsContainer} />
									<Route path="/" component={VotingContainer} />
							</Route>

ReactDOM.render(
	<Provider store={store}>
		<Router>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);
