import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import { BrowserRouter as Router, Route, IndexRoute} from 'react-router-dom'

import { createBrowserHistory } from 'history';

import reducers from './reducers';
import { routes } from './routes';
import './index.css';

import App from './App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const history = createBrowserHistory();

console.log(routes);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={history}>
            <div>
                <App/>
                {routes.map((route,index) => (
                    <Route key={index} {...route} />
                ))}
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
