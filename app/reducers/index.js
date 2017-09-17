import { combineReducers } from 'redux'
import Catalog from './catalog'
import Cart from './cart'
import { routerReducer } from 'react-router-redux'

const app = combineReducers({
    Catalog,
    Cart,
    routing: routerReducer
})

module.exports = app;