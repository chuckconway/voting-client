import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

import {Provider} from 'react-redux';

import {createStore} from 'redux';
import reducer from './reducer';

import {Router, Route} from 'react-router';
import App from './components/App';
import Results from './components/Results';

const pair = ['Trainspotting', '28 Days Later'];

const store = createStore(reducer);

store.dispatch({
	type:'SET_STATE',
	state:{
		vote:{
			pair:['Sunshine', '28 Days Later'],
			tally: {Sunshine:2}
		}
	}
});

const routes = <Route component={App}>
								<Route path="/results" components={Results} />
									<Route path="/" component={Voting} />
							</Route>

ReactDOM.render(
	<Provider store={store}>
		<Router>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);
