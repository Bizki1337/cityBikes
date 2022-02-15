import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from 'core/store/configureStore';

import App from './App';

ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById('root')
);