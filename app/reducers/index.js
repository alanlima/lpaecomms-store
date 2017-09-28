import { combineReducers } from 'redux'
import Catalog from './catalog'
import Cart from './cart'
import Customer from './customer'
import Session from './session'
import { routerReducer } from 'react-router-redux'

const app = combineReducers({
    Catalog,
    Cart,
    Customer,
    routing: routerReducer,
    Session
})

module.exports = app;