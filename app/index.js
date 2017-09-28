
import 'styles/bootstrap.min.css'
import 'styles/font-awesome.min.css'
// import 'styles/owl.carousel.css'
import 'styles/ecommerce-style.css'
import 'styles/responsive.css'

import 'styles/main.css'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router'

import App from 'components/App'
import MainReducer from 'reducers/index';

import { persistStore, autoRehydrate } from 'redux-persist'

var history = createHistory();

const setupStore = () => {
    const middlewares = [ thunk, routerMiddleware(history) ];

    const logger = require('redux-logger');
    middlewares.push(logger.createLogger());

    return createStore(
        MainReducer,
        {},
        compose(
            applyMiddleware(...middlewares),
            autoRehydrate()
        )
    )
}

const store = setupStore();

syncHistoryWithStore(history, store);

// history.listen(loc => console.log('history', loc))

persistStore(store, {
    blacklist: [ 'Catalog', 'routing' ]
});

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById('app')
)