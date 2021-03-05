import react from 'react';
import reactDOM from 'react-dom';
import App from './components/App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducers from './reducers';
import { addCharacterById } from './action'

const store = createStore(rootReducers);

store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(5))

reactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));