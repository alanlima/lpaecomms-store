
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

import App from 'components/App'
import MainReducer from 'reducers/index';

import { persistStore, autoRehydrate } from 'redux-persist'

const setupStore = () => {
    const middlewares = [ thunk ];

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

persistStore(store, {
    blacklist: [ 'Catalog', 'Cart' ]
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)